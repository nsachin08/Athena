import React from "react";

function Player({ link }) {
  return (
    <div>
      <video
        style={{
          width: "600px",
          height: "600px",
          border: "1px solid white",
          borderRadius: "10%",
        }}
        autoPlay
        loop
        muted
      >
        <source src={link} />
      </video>
    </div>
  );
}

export default Player;
