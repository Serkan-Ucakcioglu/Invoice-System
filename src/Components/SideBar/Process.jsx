import React from "react";
import EditSvg from "../../Assets/EditSvg";
import TrashSvg from "../../Assets/TrashSvg";
import ViewSvg from "../../Assets/ViewSvg";

function Process({ invoice, id }) {
  return (
    <div className="flex flex-col text-white mt-2">
      <div className="w-full bg-indigo-700 hover:bg-indigo-800 mb-2 h-10 p-2 flex items-center">
        <span>{invoice?.name}</span>
        <div className="flex ml-auto items-center">
          <ViewSvg id={id} />
          <EditSvg />
          <TrashSvg />
        </div>
      </div>
    </div>
  );
}

export default Process;
