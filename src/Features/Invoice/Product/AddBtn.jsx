import React from "react";

function AddBtn({ append }) {
  return (
    <section className="mt-4">
      <button
        type="button"
        onClick={() => {
          append({ product: "", quantity: 0, price: 0 });
        }}
        className="w-full h-8 mt-8 rounded bg-indigo-700 text-white"
      >
        Ekle
      </button>
    </section>
  );
}

export default AddBtn;
