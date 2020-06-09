const regex = {
  card: /1?-?\.?\(?\d{4}[\ \)\.\s]?\d{4}[\ \)\.\s]?\d{4}[\ \)\.\s]?\d{4}/gi,
  name: /^[\w']{2,} ([\w' ]+)$/,
  date: /^(1[0-2]|0[1-9]|\d)\/(2\d)$/gi,
  cvv: /1?-?\.?\(?\d{3}/gi,
};

export default regex;
