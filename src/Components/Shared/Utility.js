export const UpdateObject = (obj, newObject) => ({
  ...obj,
  ...newObject,
});

export const FilterMenuByType = (list) => {
  let availableStarters = list.filter((item) => item.type === "starters");
  let availableMainCourses = list.filter(
    (item) => item.type === "main_courses"
  );
  let availableSides = list.filter((item) => item.type === "sides");
  let availableDesserts = list.filter((item) => item.type === "desserts");
  return {
    availableStarters,
    availableMainCourses,
    availableSides,
    availableDesserts,
  };
};

export const FormattedPrice = (price) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(Math.abs(Number(price)).toFixed(2));

export const isEven = (n) => n % 2 == 0;

export const numberCountFormatter = (num) =>
  Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
    : Math.sign(num) * Math.abs(num);
