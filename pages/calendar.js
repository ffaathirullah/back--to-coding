import React, { useState } from "react";
import Header from "../components/header";
import HeaderComponents from "../components/HeaderComponents";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import CardCalender from "../components/molecules/CardCalender";
import Image from "next/image";

function calendar() {
  return (
    <>
      <div className="row mb-5" style={{ marginTop: "1em" }}>
        <div className="col-sm-3">
          <Header />
        </div>
        <div className="col-sm-8">
          <HeaderComponents />
          <div className="mt-3">
            <div class="input-group mb-3 d-flex align-items-center align-content-center">
              <input
                type="text"
                class="form-control"
                aria-label="Default"
                placeholder="Search Here..."
                style={{
                  height: "44pxs",
                  borderRadius: "16px",
                  backgroundColor: "#F7FBFE",
                }}
              />
              <div style={{ marginLeft: "-2em" }}>
                <Image src="/search.svg" height={15} width={15} />
              </div>
            </div>
          </div>

          <div className="mt-5 my-2 row">
            <div className="col-md-6">
              <div
                style={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "28px",
                }}
              >
                <p>Calender</p>
              </div>
              <div
                style={{
                  backgroundColor: "#223151",
                  padding: 20,
                  borderRadius: 10,
                }}
              >
                <FullCalendar
                  plugins={[dayGridPlugin]}
                  initialView="dayGridMonth"
                  events={[
                    { title: "event 1", date: "2022-05-23" },
                    { title: "event 2", date: "2022-05-24" },
                    { title: "event 2", date: "2022-05-02" },
                  ]}
                  header={{
                    left: "title",
                    center: "",
                    right: "today ",
                  }}
                  headerToolbar={{
                    left: "prev",
                    center: "title",
                    right: "next",
                  }}
                  editable={true}
                  selectable={true}
                  selectMirror={true}
                  dayMaxEvents={true}
                  borderColor="#223151"
                />
              </div>
            </div>
            <div className="col-md-5 ms-4">
              <div
                style={{
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "28px",
                }}
              >
                <p>Upcoming Goals</p>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <CardCalender backgroundColor="#223151" textColor="#fff" />
                </div>
                <div className="col-sm-6">
                  <CardCalender
                    backgroundColor="#fff"
                    textColor="#223151"
                    IconDark
                  />
                </div>
                <div className="col-sm-6 mt-2">
                  <CardCalender
                    backgroundColor="#fff"
                    textColor="#223151"
                    IconDark
                  />
                </div>
                <div className="col-sm-6 mt-2">
                  <CardCalender
                    backgroundColor="#fff"
                    textColor="#223151"
                    IconDark
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default calendar;
