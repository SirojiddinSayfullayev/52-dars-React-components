import React from "react";
import "./our.clients.styles.css";

import client1 from "../../../assets/client1.svg";
import client2 from "../../../assets/client2.svg";
import client3 from "../../../assets/client3.svg";
import client4 from "../../../assets/client4.svg";
import client5 from "../../../assets/client5.svg";

function OurClients() {
  const imgData = [
    {
      path: client1,
      desc: "slack",
    },
    {
      path: client2,
      desc: "descript",
    },
    {
      path: client3,
      desc: "etsy",
    },
    {
      path: client4,
      desc: "spotify",
    },
    {
      path: client5,
      desc: "logitech",
    },
  ];

  const handleClick = (text) => {
    alert(text);
  };

  return (
    <div className="clients">
      <h3 className="clients-title">OUR TRUSTED CLIENTS</h3>
      <div className="client-icons">
        {imgData.map((img, index) => {
          return (
            <div className="client-icons-item" onClick={handleClick}>
              <img src={img.path} alt={img.desc} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurClients;
