import { apiRequest } from "./api";

export const onInputChange = (e, setValue) => {
  setValue(e.target.value);
};

export const onInputBlur = (e, error, setError, name, regex) => {
  const reg = new RegExp(regex[name]);
  const result = reg.test(e.target.value) ? false : true;
  setError((error) => ({
    ...error,
    [name]: result,
  }));
};

export const onInputSelectBlur = (e, error, setError, name) => {
  const result = e.target.value ? false : true;
  setError((error) => ({
    ...error,
    [name]: result,
  }));
};

export const handleSubmit = (e, error) => {
  e.preventDefault();
  const data = {
    card: e.target.card.value,
    name: e.target.name.value,
    date: e.target.date.value,
    cvv: e.target.cvv.value,
    subdivision: e.target.subdivision.value,
  };

  const errors = Object.keys(error).filter((err) => error[err]);

  if (errors.length > 0) {
    errors.map((err) => e.target.elements[err].focus());
  } else {
    apiRequest(data);
  }
};
