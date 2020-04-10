# DynamicHTML

This project starts as a simple, quick :rocket:, and probably ugly :poop: solution for designers to be able to showcase the different behaviours a markup can accomplish by only changing attributes (basically `class` attributes now... :laughing:).

## Getting started

As this is a quick project it was created using `create-react-app`, with the only adission of tailwind and sass support. So in order to get it ready let's do...

```shell
git clone https://github.com/jvas28/dhtml.git
yarn install
yarn start
```

## How it works

The project comes with a default template built using [Bootstrap's Product Example](https://getbootstrap.com/docs/4.4/examples/product/).

## Docs

This small application works with `HTML` + `CSS` template and a `JSON`, defined in `src/config/tools.js`, which I decided to leave as Javascript file, to allow you to use variables for standard or repetitive properties.

### 1. HTML

Place all your HTML and CSS and Javascript dependencies at `public/index.html` between the comments , just please don't remove to allow the widget to render.

```html
<html>
  <head>
    ...
    <!-- Place your dependencies -->

    <!-- End of dependencies -->
  </head>
  <body>
    <!-- Place your markup here -->
    <!-- End of markup -->
    <div id="root"></div>
  </body>
</html>
```

### 2. Widget Settings

| Property   | Type     | Required | Description                                       |
| ---------- | -------- | -------- | ------------------------------------------------- |
| label      | `string` | `true`   | Name to be displayed                              |
| selector   | `string` | `true`   | Query selector to apply properties                |
| type       | `string` | `false`  | default: class                                    | Not implemented other than class actually...(but planned) |
| properties | `json`   | `true`   | Groups of classes to be applied using this widget |

```javascript
[
  {
    label:"My Widget", // required
    selector:"div.my-widget", // required
    type: "", // optional
    properties:{ // required
      ....
    }
  }
  ...
]

```

#### Properties

Let's say you have padding properties like in [Tailwind](https://tailwindcss.com/) so you can define a property Padding to group classes related to padding as follows

`src/config/tools.js`

```javascript
const paddingProp = {
  label: "Padding",
  options: {
    "": "Default",
    "p-0": "None",
    "p-1": "xs",
    "p-3": "s",
    "p-6": "m",
    "p-12": "l",
    "p-24": "xl",
  },
};

export default [
  {
    label: "box",
    selector: "div.box",
    properties: [paddingProp],
  },
];
```

# License

MIT
