import React from "react";
import Property from "./Property";
export default function Item({ label, properties, selector }) {
  return (
    <div className="p-2 bg-gray-600 rounded-sm mt-2">
      <div className="mt-2">
        <label className="text-xs font-bold">{label}</label>
      </div>
      <div className="flex flex-col">
        {properties.map((props, index) => {
          return <Property key={index} selector={selector} {...props} />;
        })}
      </div>
    </div>
  );
}
