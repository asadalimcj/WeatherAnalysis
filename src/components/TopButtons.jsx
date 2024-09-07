import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Lahore",
    },
    {
      id: 2,
      title: "Islamabad",
    },
    {
      id: 3,
      title: "Multan",
    },
    {
      id: 4,
      title: "Sahiwal",
    },

    {
      id: 5,
      title: "Quetta",
    },
  ];
  return (
    <div className="flex items-center justify-around py-10">
      {cities.map((city) => {
        return (
          <button
            key={city.id}
            className="text-white text-lg font-medium"
            onClick={() => {
              setQuery({ q: city.title });
            }}
          >
            {city.title}
          </button>
        );
      })}
    </div>
  );
}

export default TopButtons;
