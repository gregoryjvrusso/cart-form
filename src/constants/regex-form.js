const regex = {
  card: /1?-?\.?\(?\d{4}[\ \)\.\s]?\d{4}[\ \)\.\s]?\d{4}[\ \)\.\s]?\d{4}/gi,
  name: /^(?:[A-Za-z]+ ?){3,20}$\b/gi,
  date: /^(1[0-2]|0[1-9]|\d)\/(1[2-9]\d|[1-9]\d)$/gi,
  cvv: /1?-?\.?\(?\d{3}/gi,
};

export default regex;
