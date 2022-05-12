import React from "react";
import Image from "next/image";

function Modal() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        bottom: "30px",
        marginLeft: "10px",
        zIndex: 100,
      }}
    >
      <button
        type="button"
        className="btn btn-white "
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        style={{
          border: "2px solid #D2D7DB",
          borderRadius: "15px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          alignContent: "center",
          width: "180px",
          height: "40px",
          margin: 0,
          padding: 0,
        }}
      >
        <div
          style={{
            paddingLeft: 0,
            width: "25%",
            height: "100%",
            position: "relative",
          }}
          className="me-4"
        >
          <Image
            alt="button"
            src="/button.svg"
            layout="fill"
            objectFit="contain"
          />
        </div>
        New Goals
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Coming Soon
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                data-bs-dismiss="modal"
                className="btn btn-primary"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
