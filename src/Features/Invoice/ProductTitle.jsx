import React from "react";

function ProductTitle() {
  return (
    <div className="w-[370px] flex mt-4">
      <h5 className="mr-2 text-left w-[177px]">Ürün</h5>
      <h5 className="ml-auto ml-2 w-12">Adet</h5>
      <h5 className="flex ml-2 w-12">Fiyat</h5>
      <h5 className="ml-auto mr-7 w-12">Toplam</h5>
    </div>
  );
}

export default ProductTitle;
