import React from "react";

function Info({ invoice, classname }) {
  return (
    <div className="flex flex-col mt-2">
      <label htmlFor={invoice.label} className="text-white">
        {invoice.input}
      </label>
      <input id={invoice.label} type="text" className={classname} />
    </div>
  );
}

export default Info;
