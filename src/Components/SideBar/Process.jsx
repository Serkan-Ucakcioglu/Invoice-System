import React from "react";
import EditSvg from "../../Assets/EditSvg";
import TrashSvg from "../../Assets/TrashSvg";
import ViewSvg from "../../Assets/ViewSvg";

function Process() {
  return (
    <div className="flex flex-col text-white mt-4">
      <div className="w-full bg-indigo-900 mb-2 h-9 p-2 flex items-center">
        <span>se</span>
        <div className="flex ml-auto">
          <ViewSvg />
          <EditSvg />
          <TrashSvg />
        </div>
      </div>
    </div>
  );
}

export default Process;
