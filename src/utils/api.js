export const apiRequest = (data) => {
  window.alert(
    `Dados enviados para a api: 
    card: ${data.card}
    name: ${data.name}
    date: ${data.date}
    cvv: ${data.cvv}
    subdivision: ${data.subdivision}`
  );
};
