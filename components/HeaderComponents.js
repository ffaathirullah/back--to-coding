import React from "react";
import Image from "next/image";

function HeaderComponents() {
  return (
    <div className="d-flex justify-content-between">
      <div>
        <p
          style={{
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "23px",
          }}
        >
          Hi, Apriliani
        </p>
        <p
          style={{
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "18px",
          }}
        >
          UI Designer
        </p>
      </div>
      <div className="row" style={{ marginTop: "10px" }}>
        <div className="col-sm-6">
          <Image
            style={{ marginRight: 20 }}
            src="/notif.svg"
            height={27}
            width={27}
          />
        </div>
        <div className="col-sm-6">
          <Image src="/image.svg" height={27} width={27} />
        </div>
      </div>
    </div>
  );
}

export default HeaderComponents;
