import React, { useState } from "react";
import tools from "../config/tools";
import Item from "./Item";
export default function Toolbar() {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div
        className={`fixed top-0 right-0
        shadow
        mt-3 mr-3 p-2
        shadow rounded-full cursor-pointer
        bg-green-600 text-gray-200
        uppercase text-xs ${!open ? "" : "hidden"}`}
        onClick={() => setOpen(true)}
        style={{ zIndex: 9000 }}
      >
        Toolbar
      </div>
      <div
        className={`fixed top-0  right-0 min-h-full bg-gray-700 text-gray-100 p-2 shadow cursor-pointer ${
          open ? "" : "hidden"
        }`}
        style={{ overflowY: "scroll", zIndex: 9000, height: "100vh" }}
      >
        <div className="flex flex-row justify-between items-center">
          <h1
            className="font-bold text-sm text-gray-300 uppercase"
            onClick={() => setOpen(false)}
          >
            Dynamic controls
          </h1>
          <button
            className="p-1 rounded-full bg-gray-500 text-xs"
            onClick={() => setOpen(false)}
          >
            Hide
          </button>
        </div>

        <div>
          {tools.map((tool, index) => (
            <Item key={index} {...tool} />
          ))}
        </div>
      </div>
    </>
  );
}
