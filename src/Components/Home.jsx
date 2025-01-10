import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Home() {
  const [details, setDetails] = useState(null);
  const [cocktailList, setCocktailList] = useState(null);
  const navigate = useNavigate();
  async function fetchData() {
    try {
      const [detailsRes, cocktailRes] = await Promise.all([
        fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php"),
        fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
        ),
      ]);

      const [detailsdata, cocktailData] = await Promise.all([
        detailsRes.json(),
        cocktailRes.json(),
      ]);

      setDetails(detailsdata.drinks[0]);
      setCocktailList(cocktailData.drinks);
    } catch {
      console.log("error");
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  const CustomPrevArrow = ({ onClick }) => {
    return (
      <button
        className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 z-10 bg-[#7A1CAC] text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md transition-transform duration-300 hover:scale-110"
        onClick={onClick}
      >
        &#8592; {/* Left arrow */}
      </button>
    );
  };

  const CustomNextArrow = ({ onClick }) => {
    return (
      <button
        className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 z-10 bg-[#7A1CAC] text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md transition-transform duration-300 hover:scale-110"
        onClick={onClick}
      >
        &#8594; {/* Right arrow */}
      </button>
    );
  };

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const highlights = [
    {
      img: "https://img.freepik.com/free-photo/young-woman-drinking-cocktail_23-2147642413.jpg?ga=GA1.1.162254289.1730966228&semt=ais_hybrid",
      text: "Discover Your Perfect Cocktail at The CocktailDB!",
    },
    {
      img: "https://img.freepik.com/free-photo/man-blue-standing-with-champagne-glass-hand_23-2147989950.jpg?ga=GA1.1.162254289.1730966228&semt=ais_hybrid",
      text: "Explore Thousands of Recipes on The CocktailDB!",
    },
    {
      img: "https://img.freepik.com/free-photo/girl-with-cocktail_1157-7172.jpg?ga=GA1.1.162254289.1730966228&semt=ais_hybrid",
      text: "The CocktailDB: Recipes, Tips, and More!",
    },
    {
      img: "https://img.freepik.com/free-photo/beautiful-brunette-woman-evening-dress-smiling-holding-wine-glass_176420-3768.jpg?ga=GA1.1.162254289.1730966228&semt=ais_hybrid",
      text: "The CocktailDB Has All Your Cocktail Needs!",
    },
  ];

  return (
    <div className="w-full h-auto">
      <div className="w-full h-auto bg-banner bg-center bg-cover">
        <div className="w-full px-20 pt-20 pb-32">
          <p className="font-medium font-Outfit text-6xl text-white mb-5">
            Meet Siply
          </p>
          <p className="font-medium font-Outfit text-5xl text-[#500073] mb-10">
            Your Virtual AI Mixologist
          </p>
          <p className="font-medium font-Outfit text-4xl text-white mb-2">
            Siply is your personal cocktail expert, offering step-by-step
            guidance, creative recipes, and tailored drink recommendations to
            elevate your mixology game.
          </p>
          <p className="font-medium font-Outfit text-4xl text-white">
            Start chatting with Siply now and explore a world of refreshing
            cocktail possibilities!
          </p>
        </div>
      </div>

      <div className="w-full flex flex-row justify-between px-10 items-center py-10">
        <div className="w-3/5 h-auto">
          <img
            src="https://www.seedlipdrinks.com/images/chat/Elli_Chat_AI_img_txt.jpg?quality=75&width=1920&mode=crop"
            alt="unable to load"
            className="w-full h-2/3 rounded-lg object-cover"
          />
        </div>
        <div className="w-2/5 flex flex-col items-center justify-center">
          <p className="font-medium font-Outfit text-4xl text-[#500073] mb-5">
            Your Virtual AI Mixologist
          </p>
          <p className="font-medium font-Outfit text-2xl text-center text-[#500073] mb-5">
            Siply is your personal cocktail expert, offering step-by-step
            guidance, creative recipes, and tailored drink recommendations to
            elevate your mixology game
          </p>
          <p className="font-medium font-Outfit text-xl text-center text-[#500073] mb-5">
            Start chatting with Siply now and explore a world of refreshing
            cocktail possibilities!
          </p>
          <button className="border-2 border-black px-5 py-2 rounded-full text-xl font-bold font-Outfit transition-[0.3s] hover:transition-[0.3s] hover:bg-black hover:text-white">
            Check
          </button>
        </div>
      </div>

      {details && details != null ? (
        <div className="w-full bg-[#E1EACD] h-auto flex flex-row justify-center gap-10 px-20 items-center py-10">
          <div className="w-[40%] flex flex-col items-center justify-center">
            <div className="w-full flex flex-col items-center justify-center">
              <p className="text-xl font-semibold text-[#7A1CAC] mb-5">
                Want to know about
              </p>
              <p className="text-xl text-[#500073] font-bold">{details.strDrink}</p>
              <p className="text-xl text-[#500073] font-bold">{details.strCategory}</p>
              <p className="text-center text-[#500073] text-xl ">
                {details.strInstructions}
              </p>
              <button
                onClick={() => navigate(`/details/${details.idDrink}`)}
                className="mt-5 px-5 border-2 border-black py-2 rounded-full text-xl font-bold font-Outfit transition-[0.3s] hover:transition-[0.3s] hover:bg-black hover:text-white"
              >
                Details
              </button>
            </div>
          </div>
          <div className="w-2/3 flex flex-col items-center justify-center">
            <img
              src={details?.strDrinkThumb}
              alt="Image is not available"
              style={{ boxShadow: "0 0 8px black" }}
              className="w-2/3 h-80 object-cover rounded-md mb-5"
            />
            <button
              onClick={() => fetchData()}
              className="mt-5 px-5 border-2 border-black py-1 rounded-md text-xl font-bold font-Outfit transition-[0.3s] hover:transition-[0.3s] hover:bg-black hover:text-white"
            >
              Next →
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full h-20 flex flex-row justify-center items-center">
          <p className="text-2xl font-semibold ">Loading...</p>
        </div>
      )}
      {cocktailList && cocktailList.length > 0 ? (
        <div className="w-full h-auto flex flex-row justify-center items-center gap-5 px-20 py-10">
          <div className="w-2/5 h-auto flex flex-col items-center justify-center">
            <p className="text-[#7A1CAC] text-xl font-Outfit font-normal">
              Cocktail Recipes
            </p>
            <p className="text-3xl text-[#500073] font-Outfit font-semibold mt-2">
              Tend to your own bar
            </p>
            <button
              onClick={() => navigate("/cocktailList")}
              className="mt-5 font-Outfit text-2xl font-medium border-2 border-black transition-[0.3s] hover:transition-[0.3s] hover:bg-black hover:text-white px-3 py-[4px] rounded-lg"
            >
              Check →
            </button>
          </div>
          <div className="w-3/5 h-auto">
            <Slider {...settings}>
              {cocktailList.map((item, index) => (
                <div key={index} className="relative w-[300px] h-[400px]">
                  <img
                    src={item.strDrinkThumb}
                    alt={item.strDrink}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="w-full h-auto flex flex-col absolute bottom-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg">
                    <p className="text-lg font-semibold text-center">
                      {item.strDrink}
                    </p>
                    <button
                      onClick={() => navigate(`/details/${item.idDrink}`)}
                      className="mt-2 px-3 py-1 border border-white rounded-lg"
                    >
                      Details
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      ) : (
        <div className="w-full h-20 flex flex-row justify-center items-center">
          <p className="text-2xl font-semibold font-Outfit">Loading...</p>
        </div>
      )}
      <div className="w-full px-32 mt-5">
        <p className="text-2xl font-Outfit font-medium text-[#500073]">
          Our Journal
        </p>
        <p className="text-4xl font-Outfit font-semibold text-[#500073]">
          Sip into Stories, Cocktails & Creations
        </p>
      </div>
      <div className="w-full h-auto flex flex-row justify-center items-center gap-5 px-32 py-10">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="w-[350px] h-[450px] relative overflow-hidden group"
          >
            <img
              src={item.img}
              className="w-full h-full object-cover rounded-lg"
            />
            {/* Hover Overlay */}
            <div className="w-full rounded-lg h-full absolute top-0 left-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-2xl text-white text-center font-Outfit font-medium">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
