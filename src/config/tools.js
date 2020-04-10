const backgroundOptions = {
  label: "Background",
  options: {
    "": "Default",
    "bg-light": "Light",
    "bg-dark": "Dark",
    "bg-primary": "Primary",
    "bg-secondary": "Secondary",
  },
};

const textOptions = {
  label: "Text",
  options: {
    "": "Default",
    "text-white": "White",
    "text-black": "Black",
    "text-primary": "Primary",
    "text-secondary": "Secondary",
  },
};
export default [
  {
    label: "Navbar",
    selector: "nav",
    properties: [
      {
        label: "Sticky",
        options: {
          "": "Default",
          "sticky-top": "Sticky Top",
          "fixed-bottom": "Fixed Bottom",
        },
      },
      backgroundOptions,
      textOptions,
    ],
  },
  {
    label: "Hero",
    selector: ".widget-hero",
    properties: [backgroundOptions, textOptions],
  },
  {
    label: "Footer",
    selector: "footer",
    properties: [
      {
        label: "Layout",
        options: {
          "": "Default",
          container: "Boxed",
          "w-full": "Full",
        },
      },
      {
        label: "Padding",
        options: {
          "": "Default",
          "p-3": "S",
          "p-6": "M",
          "p-10": "L",
        },
      },
      backgroundOptions,
      textOptions,
    ],
  },
  {
    label: "Headline 2 (General)",
    selector: "h2,h1",
    properties: [textOptions],
  },
];
