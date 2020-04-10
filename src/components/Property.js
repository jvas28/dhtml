import React, { useState } from "react";
import { apply } from "../utils/dom";

export default function Property(
  { options, selector, label, type = "class" },
  index
) {
  const [selected, setSelected] = useState("");
  return (
    <div className="flex flex-col" key={index}>
      <label className="text-xs">{label}:</label>
      {options.length < 6 ? (
        <select
          className="m-2 p-2 w-full"
          value={selected}
          onChange={(e) => {
            apply(selector, type, e.target.value, options);
            setSelected(e.target.value);
          }}
        >
          {Object.entries(options).map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
      ) : (
        <div className="flex flex-row">
          {Object.entries(options).map(([key, value]) => {
            return (
              <div
                key={key}
                className={`p-2 text-xs flex-auto text-center rounded ${
                  key === selected ? "bg-green-400" : "bg-gray-400"
                }`}
                onClick={(e) => {
                  apply(selector, type, key, options);
                  setSelected(key);
                }}
              >
                {value}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
