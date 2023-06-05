import { useState } from 'react';

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { value, name } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    // ! ERROR: Es un estado no controlado y marca error
    // ! setFormState({});
    // * Controlado, se tiene la variable declarada dentro del componente
    setFormState(initialForm);
  };

  return { ...formState, formState, onInputChange, onResetForm };
};
