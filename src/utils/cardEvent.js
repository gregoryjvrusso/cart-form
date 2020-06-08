export const cardOnClick = (setPosition, position) => {
  setPosition(!position);
};

export const numberFormat = (number) => {
  let value = number.replace(/ /g, "") || "";
  let index = value.length || 0;
  for (index; index < 16; index++) {
    value += "*";
  }
  return [
    value.substr(0, 4),
    value.substr(4, 4),
    value.substr(8, 4),
    value.substr(12, 4),
  ];
};

export const checkValue = (name, card, date) => {
  return name || card || date;
};
