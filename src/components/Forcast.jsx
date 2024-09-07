import React from "react";

function Forcast({ title }) {
  return (
    <div>
      <div className="flex flex-row justify-start my-2">
        <p className="font-light text-white">{title}</p>
      </div>

      <hr></hr>

      <div className="flex flex-row justify-around">
        <div className="flex flex-col justify-center items-center my-3">
          <p className="font-light text-sm text-white">02:00 PM</p>
          <img
            src="https://th.bing.com/th/id/R.d7343be7e81da48445541f3a4d8721e4?rik=401388Dm1wtphQ&riu=http%3a%2f%2fpngimg.com%2fuploads%2fsun%2fsun_PNG13421.png&ehk=mfot2Bblu7HdQV3VeB4NepXsUJzACZP5O6L3sSfBv0o%3d&risl=&pid=ImgRaw&r=0"
            alt=""
            className="w-10 my-1"
          />
          <p className="font-medium text-white">22&deg;</p>
        </div>

        <div className="flex flex-col justify-center items-center my-3">
          <p className="font-light text-sm text-white">02:00 PM</p>
          <img
            src="https://th.bing.com/th/id/R.d7343be7e81da48445541f3a4d8721e4?rik=401388Dm1wtphQ&riu=http%3a%2f%2fpngimg.com%2fuploads%2fsun%2fsun_PNG13421.png&ehk=mfot2Bblu7HdQV3VeB4NepXsUJzACZP5O6L3sSfBv0o%3d&risl=&pid=ImgRaw&r=0"
            alt=""
            className="w-10 my-1"
          />
          <p className="font-medium text-white">22&deg;</p>
        </div>

        <div className="flex flex-col justify-center items-center my-3">
          <p className="font-light text-sm text-white">02:00 PM</p>
          <img
            src="https://th.bing.com/th/id/R.d7343be7e81da48445541f3a4d8721e4?rik=401388Dm1wtphQ&riu=http%3a%2f%2fpngimg.com%2fuploads%2fsun%2fsun_PNG13421.png&ehk=mfot2Bblu7HdQV3VeB4NepXsUJzACZP5O6L3sSfBv0o%3d&risl=&pid=ImgRaw&r=0"
            alt=""
            className="w-10 my-1"
          />
          <p className="font-medium text-white">22&deg;</p>
        </div>

        <div className="flex flex-col justify-center items-center my-3">
          <p className="font-light text-sm text-white">02:00 PM</p>
          <img
            src="https://th.bing.com/th/id/R.d7343be7e81da48445541f3a4d8721e4?rik=401388Dm1wtphQ&riu=http%3a%2f%2fpngimg.com%2fuploads%2fsun%2fsun_PNG13421.png&ehk=mfot2Bblu7HdQV3VeB4NepXsUJzACZP5O6L3sSfBv0o%3d&risl=&pid=ImgRaw&r=0"
            alt=""
            className="w-10 my-1"
          />
          <p className="font-medium text-white">22&deg;</p>
        </div>
      </div>
    </div>
  );
}

export default Forcast;
