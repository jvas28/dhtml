export const apply = (prop) => {
  const elements = document.querySelectorAll(prop);
  elements.forEach((element) => {
    console.log(element);
  });
};
