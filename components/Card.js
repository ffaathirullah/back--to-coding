import React from "react";
import Image from "next/image";
import ProgressBar from "@ramonak/react-progress-bar";

function Card(props) {
  return (
    <div
      style={{
        backgroundColor: props.color,
        height: "13em",
        borderRadius: "20px",
      }}
    >
      <div className="py-3 mx-3 ms-4">
        <div className="d-flex justify-content-between ">
          <div>
            <p
              style={{
                color: props.textColor,
                fontFamily: "'Poppins'",
              }}
            >
              {props.title}
            </p>
          </div>
          <div>
            <Image src="/pilihan.svg" height={7} width={18} />
          </div>
        </div>
        <div className="d-flex justify-content-between ">
          <div className="d-flex flex-row  mb-3">
            <div style={{}}>
              <Image src="/image1.svg" height={48} width={48} />
            </div>
            <div style={{ marginLeft: -30 }}>
              <Image src="/image2.svg" height={48} width={48} />
            </div>
            <div style={{ marginLeft: -30 }}>
              <Image src="/image3.svg" height={48} width={48} />
            </div>
          </div>

          <div>
            <div className=" d-flex align-items-center me-2 ">
              <div className="flex-shrink-0">
                {props.white ? (
                  <Image src="/calendar3.svg" height={22} width={19} />
                ) : (
                  <Image src="/blackCalendar.svg" height={22} width={19} />
                )}
              </div>
              <div
                className="flex-grow-1 ms-2"
                style={{ color: props.textColor, fontSize: "8px" }}
              >
                Aug 23, 2021
              </div>
            </div>
            <div className="d-flex align-items-center me-2 mt-2">
              <div className="flex-shrink-0">
                {props.white ? (
                  <Image src="/time.svg" height={22} width={19} />
                ) : (
                  <Image src="/blackTime.svg" height={22} width={19} />
                )}
              </div>
              <div className="flex-grow-1 ms-2 pt-2">
                <p style={{ color: props.textColor, fontSize: "8px" }}>13.30</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <ProgressBar
            isLabelVisible
            customLabel
            bgColor="#F9C917"
            baseBgColor="#fff"
            completed={88}
            height={7}
            transitionDuration="10s"
          />
          <div className="mt-1 d-flex justify-content-between ">
            <div>
              <p style={{ color: props.textColor }}>In Progress</p>
            </div>
            <p style={{ color: props.textColor }}>88%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
