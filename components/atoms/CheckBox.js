import React, { useState } from "react";

function CheckBox(props) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="mt-2">
      <div
        className="d-flex  align-items-center justify-content-between px-3"
        style={{
          backgroundColor: checked ? "#E3EBFF" : "#fff",
          borderRadius: 8,
          border: "2px solid rgba(204, 210, 227, 0.27)",
          height: 48,
        }}
      >
        <div style={{ fontSize: "12px" }}>{props.text}</div>
        <div className="containerCheck">
          <input
            name="checked"
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(!checked)}
            style={{ background: "red" }}
          />
        </div>
      </div>
    </div>
  );
}

export default CheckBox;
