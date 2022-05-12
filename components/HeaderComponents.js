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
          <div class="dropdown">
            <button
              class=" dropdown-toggle"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ borderStyle: "none", backgroundColor: "#fff" }}
            >
              <Image src="/image.svg" height={27} width={27} />
            </button>
            <ul
              style={{ width: "300px" }}
              class="dropdown-menu"
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <a class="dropdown-item" href="#">
                  <div className="row">
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
                        <div className="">
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
                          <p style={{ margin: 0 }}>42+</p>
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
                        <div className="">
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
                          <p style={{ margin: 0 }}>10+</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  User Management
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Privacy
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Logout
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
