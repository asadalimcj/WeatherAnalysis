import React from "react";

function SpecificButton({ setColumn }) {
  const cities = [
    {
      id: 1,
      title: "Humidity",
    },
    {
      id: 2,
      title: "Temperature",
    },
    {
      id: 3,
      title: "WindSpeed",
    },
    {
      id: 4,
      title: "Precipitation",
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-around py-10">
        {cities.map((str) => {
          return (
            <button
              key={str.id}
              className="text-white text-lg font-medium"
              onClick={() => {
                console.log("clicked value", str.title);
                setColumn({ col: str.title });
              }}
            >
              {str.title}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default SpecificButton;
