import React from "react";
import Image from "next/image";

function CardCalender() {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#223151",
          height: "260px",
          width: "188px",
          borderRadius: 10,
        }}
        className="row pt-2 justify-content-center align-content-center align-items-center"
      >
        <div className="col-sm-8 me-3 ps-4">
          <Image alt="button" src="/IconNight.svg" height={38} width={38} />
        </div>
        <div
          style={{
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "16px",
            color: "#FFFFFF",
          }}
          className="col-sm-8 mt-2"
        >
          <p>Mobile app protototype</p>
        </div>
        <div className="col-sm-8 d-flex flex-row  mb-3">
          <div style={{}}>
            <Image src="/image1.svg" height={42} width={42} />
          </div>
          <div style={{ marginLeft: -30 }}>
            <Image src="/image2.svg" height={42} width={42} />
          </div>
          <div style={{ marginLeft: -30 }}>
            <Image src="/image3.svg" height={42} width={42} />
          </div>
        </div>
        <div className="col-sm-8">
          <Image src="/light.svg" height={18} width={58} />
        </div>
      </div>
    </div>
  );
}

export default CardCalender;
