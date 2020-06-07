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
}