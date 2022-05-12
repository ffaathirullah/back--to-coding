import React, { useState } from "react";
import Header from "../components/header";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import HeaderComponents from "../components/HeaderComponents";
import Card from "../components/Card";
import CheckBox from "../components/atoms/CheckBox";
import Link from "next/link";
import Image from "next/image";

export default function Home(props) {
  const [value, setValue] = useState("1");
  const data1 = { id: 1, title: "UI Dashboard Projects" };
  const data2 = { id: 2, title: "Landing Page" };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="row mb-5" style={{ marginTop: "1em" }}>
        <div className="col-sm-3">
          <Header />
        </div>
        <div className="col-sm-8 ">
          <HeaderComponents />
          <div className="mt-3">
            <div class="input-group mb-3 d-flex align-items-center align-content-center">
              <input
                type="text"
                class="form-control"
                aria-label="Default"
                placeholder="Search Here..."
                style={{
                  height: "55px",
                  borderRadius: "16px",
                  backgroundColor: "#F7FBFE",
                }}
              />
              <div style={{ marginLeft: "-3em" }}>
                <Image src="/search.svg" height={20} width={20} />
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
                  My Goals
                </p>
                <Box sx={{ width: "100%", typography: "body1" }}>
                  <TabContext value={value}>
                    <Box sx={{ borderBottom: 0.5, borderColor: "divider" }}>
                      <TabList
                        onChange={handleChange}
                        aria-label="lab API tabs example"
                      >
                        <Tab
                          style={{ fontSize: "9px" }}
                          label="In progress"
                          value="1"
                        />
                        <Tab
                          style={{ fontSize: "9px" }}
                          label="To do"
                          value="2"
                        />
                        <Tab
                          style={{ fontSize: "9px" }}
                          label="Done"
                          value="3"
                        />
                        <Tab
                          style={{ fontSize: "9px" }}
                          label="UpComing"
                          value="4"
                        />
                        <Tab
                          style={{ fontSize: "9px" }}
                          label="See All"
                          value="5"
                        />
                      </TabList>
                    </Box>
                    <TabPanel value="1">
                      <div>
                        <Link href={`/goals/${data1.id}`}>
                          <div style={{ cursor: "pointer" }}>
                            <Card
                              title={data1.title}
                              white
                              color="#223151"
                              textColor="#fff"
                            />
                          </div>
                        </Link>
                      </div>
                      <div className="mt-2">
                        <Link href={`/goals/${data2.id}`}>
                          <div style={{ cursor: "pointer" }}>
                            <Card title={data2.title} color="#E3EBFF" />
                          </div>
                        </Link>
                      </div>
                    </TabPanel>
                    <TabPanel value="2">To do</TabPanel>
                    <TabPanel value="3">Done</TabPanel>
                    <TabPanel value="4">UpComing</TabPanel>
                    <TabPanel value="5">See All</TabPanel>
                  </TabContext>
                </Box>
              </div>
              <div className="col-sm-5">
                <div className="mb-5">
                  <p
                    style={{
                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "28px",
                    }}
                  >
                    My Daily Task
                  </p>
                </div>

                <div className="mt-6">
                  <br />
                  <CheckBox text="Landing page design" />
                  <CheckBox text="Sketching logo and coloring" />
                  <CheckBox text="UI Design" />
                  <CheckBox text="UI Design" />
                  <CheckBox text="UI Design" />
                  <CheckBox text="UI Design" />
                  <CheckBox text="UI Design" />
                  <CheckBox text="UI Design" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
