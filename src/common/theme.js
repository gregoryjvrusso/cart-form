const breakpoints = ["40em", "52em", "64em", "80em"];
const spaces = [0, 4, 8, 16, 20, 32, 64, 128, 256, 512];
const fontFamily = 'Verdana, Roboto, Arial, Helvetica, sans-serif';
const fontSizes = [12, 14, 16, 18, 20, 24, 32, 40, 56, 72];
const fontWeights = { regular: 400, light: 300, medium: 500, semibold: 600, bold: 700 };

export default {
  color: "#000000",
  breakpoints,
  spaces,
  fontFamily,
  fontSizes,
  fontWeights,
  colors: {
    texts: {
      gray: "#C9C9C9",
      black: "#3C3C3C",
      red: "#EB5757",
      warning: "#ed3737",
      white: "#FFFFFF",
    },
    backgrounds: {
      primary: {
        gray: "#e5e5e5",
        grayDark: "#7d7d7d",
        blue: "#4eb0de",
        red: "#DE4B4B",
        white: "#FFFFFF",
      },
    },
  },
};
