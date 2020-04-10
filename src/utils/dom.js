export const apply = (selector, type, value, options) => {
  const elements = document.querySelectorAll(selector);
  const optClasses = Object.keys(options);
  elements.forEach((element) => {
    switch (type) {
      case "class":
        const classes = element.className.split(" ");
        element.className = [
          ...classes.filter((c) => !optClasses.includes(c)),
          value,
        ].join(" ");
        break;
      default:
        break;
    }
  });
};
