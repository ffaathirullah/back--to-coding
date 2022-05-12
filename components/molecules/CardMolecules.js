import React from "react";
import Image from "next/image";

function CardMolecules(props) {
  return (
    <div
      style={{
        backgroundColor: "#223151",
        height: "78px",
        width: "238px",
        borderRadius: 10,
      }}
      className="d-flex justify-content-start align-content-center align-items-center"
    >
      <div className="me-3 ps-4">
        <Image alt="button" src="/ImageCard.svg" height={38} width={38} />
      </div>
      <div className="py-5">
        <p
          style={{
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "12px",
            color: "#FFFFFF",
            margin: 0,
            padding: 0,
          }}
        >
          {props.textJudul}
        </p>
        <p
          style={{
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "8px",
            color: "#FFFFFF",
            margin: 0,
            padding: 0,
          }}
        >
          {props.sizeText}
        </p>
      </div>
    </div>
  );
}

export default CardMolecules;
