import React, { useEffect } from "react";
import Header from "../../components/header";
import HeaderComponents from "../../components/HeaderComponents";
import Image from "next/image";
import CardMolecules from "../../components/molecules/cardMolecules";
import CheckBox from "../../components/atoms/CheckBox";
import { useRouter } from "next/router";

function Goals() {
  const { query, isReady } = useRouter();

  useEffect(() => {
    console.log(query.id);
  }, [isReady]);

  return (
    <>
      <div className="row mb-5" style={{ marginTop: "1em" }}>
        <div className="col-sm-3">
          <Header />
        </div>
        <div className="col-sm-8">
          <HeaderComponents />
          <div className="mt-3">
            <div className="input-group mb-3 d-flex align-items-center align-content-center">
              <input
                type="text"
                className="form-control"
                aria-label="Default"
                placeholder="Search Here..."
                style={{
                  height: "44pxs",
                  borderRadius: "16px",
                  backgroundColor: "#F7FBFE",
                }}
              />
              <div style={{ marginLeft: "-2m" }}>
                <Image src="/search.svg" height={15} width={15} />
              </div>
            </div>
          </div>
          <div className="mt-5 ">
            <div className="row">
              <div className="col-sm-7">
                <p
                  style={{
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "28px",
                  }}
                >
                  {query.id == "1" ? "UI Dashboard Projects" : "Landing Page"}
                </p>
                <div>
                  <div className="row">
                    <div className="col-sm-6">
                      <p
                        style={{
                          color: "#D2D7DB",
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "14px",
                        }}
                      >
                        Team
                      </p>
                      <div
                        style={{
                          backgroundColor: "#E3EBFF",
                          height: "93px",
                          width: "238px",
                        }}
                        className="d-flex justify-content-around align-items-center"
                      >
                        <div className="d-flex flex-row me-3">
                          <div style={{}}>
                            <Image src="/image1.svg" height={34} width={34} />
                          </div>
                          <div style={{ marginLeft: -17 }}>
                            <Image src="/image2.svg" height={34} width={34} />
                          </div>
                          <div style={{ marginLeft: -17 }}>
                            <Image src="/image3.svg" height={34} width={34} />
                          </div>
                          <div style={{ marginLeft: -17 }}>
                            <Image src="/image3.svg" height={34} width={34} />
                          </div>
                        </div>
                        <div>
                          <button
                            style={{
                              height: "100%",
                              position: "relative",
                              border: 0,
                              backgroundColor: "#E3EBFF",
                            }}
                          >
                            <Image
                              alt="button"
                              src="/button2.svg"
                              height={24}
                              width={24}
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <p
                        style={{
                          color: "#D2D7DB",
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: "400",
                          fontSize: "14px",
                        }}
                      >
                        Deadline
                      </p>
                      <div>
                        <div className=" d-flex align-items-center me-2 ">
                          <div className="flex-shrink-0">
                            <Image
                              src="/blackCalendar.svg"
                              height={22}
                              width={19}
                            />
                          </div>
                          <div
                            className="flex-grow-1 ms-2"
                            style={{
                              color: "#D2D7DB",
                              fontFamily: "Poppins",
                              fontStyle: "normal",
                              fontWeight: "400",
                              fontSize: "12px",
                            }}
                          >
                            Aug 23, 2021
                          </div>
                        </div>
                        <div className="d-flex align-items-center me-2 mt-2">
                          <div className="flex-shrink-0">
                            <Image
                              src="/blackTime.svg"
                              height={22}
                              width={19}
                            />
                          </div>
                          <div className="flex-grow-1 ms-2 pt-2">
                            <p
                              style={{
                                color: "#D2D7DB",
                                fontFamily: "Poppins",
                                fontStyle: "normal",
                                fontWeight: "400",
                                fontSize: "12px",
                              }}
                            >
                              13.30
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <p
                        style={{
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: "700",
                          fontSize: "20px",
                        }}
                      >
                        Attachments
                      </p>
                      <div className="row">
                        <div className="col-sm-6 mt-2">
                          <CardMolecules
                            textJudul="Preview.zip"
                            sizeText="32 mb"
                          />
                        </div>
                        <div className="col-sm-6 mt-2">
                          <CardMolecules
                            textJudul="Design preview.jpg"
                            sizeText="19 mb"
                          />
                        </div>
                        <div className="col-sm-6 mt-2">
                          <CardMolecules
                            textJudul="Desain.fig"
                            sizeText="32 mb"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-5 mt-5">
                <div>
                  <p
                    style={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "20px",
                    }}
                  >
                    Description
                  </p>
                  <p
                    style={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "12px",
                    }}
                  >
                    Make your own design UI Dashboard for meeting now. Send your
                    files not more than 200 mb. I will check it soon. Make your
                    own design UI Dashboard for meeting now. Send your files not
                    more than 200 mb. I will check it soon.{" "}
                    <a href="#" style={{ color: "#F9C917" }}>
                      Read more
                    </a>
                  </p>
                </div>

                <div className="mt-4">
                  <p
                    style={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "20px",
                    }}
                  >
                    Task
                  </p>
                  <div>
                    <CheckBox text="Landing page design" />
                    <CheckBox text="Sketching logo and coloring" />
                    <CheckBox text="UI Design" />
                    <CheckBox text="UI Design" />
                    <CheckBox text="UI Design" />
                    <CheckBox text="UI Design" />
                    <CheckBox text="UI Design" />
                    <CheckBox text="UI Design" />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Goals;
