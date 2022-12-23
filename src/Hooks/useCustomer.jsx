function useCustomer() {
  const info = [
    { label: "name", input: "Müşteri adı" },
    { label: "email", input: "Email" },
  ];
  const info2 = [
    { label: "city", input: "City" },
    { label: "postcode", input: "Post Code" },
    { label: "country", input: "Country" },
  ];
  return { info, info2 };
}

export default useCustomer;
