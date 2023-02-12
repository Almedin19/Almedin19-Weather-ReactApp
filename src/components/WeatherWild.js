import React from "react";

function WeatherWild({ data, error }) {
  console.log(data);
  return (
    <div
      style={{
        border: "1px solid darkgrey",
        padding: "10px",
        width: "50%",
        margin: "20px auto",
        borderRadius: "20px",
      }}
    >
      <h2>{data.location.name}</h2>
      <br />
      <h2>{data.location.country}</h2>
      <p
        style={{
          display: "flex",
          flexWrap: "nowrap",
          flexDirection: "column-reverse",
          alignItems: "center",
        }}
      >
        <img
          src={data.current.condition.icon}
          alt={data.current.condition.text}
        />
        {data.current.condition.text}
      </p>
      <h2>
        {data.current.temp_c}
        <sup>&bull;</sup>C /{data.current.temp_f} F<h2>{error}</h2>
      </h2>
      <p>{data.location.localtime}</p>
    </div>
  );
}

export default WeatherWild;
