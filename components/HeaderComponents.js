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
          <div className="dropdown">
            <button
              className=" dropdown-toggle"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ borderStyle: "none", backgroundColor: "#fff" }}
            >
              <Image src="/image.svg" height={27} width={27} />
            </button>
            <ul
              style={{ width: "300px" }}
              className="dropdown-menu"
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <a className="dropdown-item" href="#">
                  <div className="row ">
                    <div className="col-sm-6">
                      <div
                        style={{
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: 500,
                          fontSize: "14px",
                        }}
                      >
                        Total Project
                      </div>
                      <div className="d-flex">
                        <div className="col-sm-5 mt-1">
                          <Image src="/TaskIcon.svg" height={43} width={43} />
                        </div>
                        <div className="pt-2">
                          <p
                            style={{
                              fontFamily: "Poppins",
                              fontStyle: "normal",
                              fontWeight: 600,
                              fontSize: "12px",
                              margin: 0,
                            }}
                          >
                            My Project
                          </p>
                          <p
                            style={{
                              margin: 0,
                              fontFamily: "Poppins",
                              fontStyle: "normal",
                              fontWeight: 700,
                              fontSize: "16px",
                            }}
                          >
                            42+
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div
                        style={{
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: 500,
                          fontSize: "14px",
                        }}
                      >
                        Team Project
                      </div>
                      <div className="d-flex">
                        <div className="col-sm-5 mt-1">
                          <Image src="/TeamIcon.svg" height={43} width={43} />
                        </div>
                        <div className="pt-2">
                          <p
                            style={{
                              fontFamily: "Poppins",
                              fontStyle: "normal",
                              fontWeight: 500,
                              fontSize: "14px",
                              margin: 0,
                            }}
                          >
                            My Team
                          </p>
                          <p
                            style={{
                              margin: 0,
                              fontFamily: "Poppins",
                              fontStyle: "normal",
                              fontWeight: 700,
                              fontSize: "16px",
                            }}
                          >
                            10+
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li className="mt-4">
                <a className="dropdown-item" href="#">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-between align-items-center">
                      <Image src="/settings.svg" height={43} width={43} />
                      <p
                        style={{
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: "500",
                          fontSize: "14px",
                        }}
                        className="ms-2 mt-2"
                      >
                        Settings
                      </p>
                    </div>
                    <div>
                      <Image src="/nextIcon.svg" height={11} width={6} />
                    </div>
                  </div>
                </a>
              </li>
              <li className="mt-1">
                <a className="dropdown-item" href="#">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-between align-items-center">
                      <Image src="/userManagement.svg" height={43} width={43} />
                      <p
                        style={{
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: "500",
                          fontSize: "14px",
                        }}
                        className="ms-2 mt-2"
                      >
                        User Management
                      </p>
                    </div>
                    <div>
                      <Image src="/nextIcon.svg" height={11} width={6} />
                    </div>
                  </div>
                </a>
              </li>
              <li className="mt-1">
                <a className="dropdown-item" href="#">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-between align-items-center">
                      <Image src="/privacy.svg" height={43} width={43} />
                      <p
                        style={{
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: "500",
                          fontSize: "14px",
                        }}
                        className="ms-2 mt-2"
                      >
                        Privacy
                      </p>
                    </div>
                    <div>
                      <Image src="/nextIcon.svg" height={11} width={6} />
                    </div>
                  </div>
                </a>
              </li>
              <li className="mt-1">
                <a className="dropdown-item" href="#">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-between align-items-center">
                      <Image src="/logOut.svg" height={43} width={43} />
                      <p
                        style={{
                          fontFamily: "Poppins",
                          fontStyle: "normal",
                          fontWeight: "500",
                          fontSize: "14px",
                        }}
                        className="ms-2 mt-2"
                      >
                        Log Out
                      </p>
                    </div>
                    <div>
                      <Image src="/nextIcon.svg" height={11} width={6} />
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponents;
