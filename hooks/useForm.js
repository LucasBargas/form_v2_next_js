import { useState } from 'react';

const types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Este tipo de Email é inválido',
  },
  user: {
    regex: /^[A-Za-z0-9-]+$/,
    message: 'O Usuário deve conter letras e/ou números',
  },
}

const useForm = type => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  const validate = value => {
    if (type === false) return true;
    
    if (value.length === 0) {
      setError('Este campo não pode ficar em branco');
      return false;

    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;

    } else {
      setError(null);
      return true;
    }
  }

  const onChange = ({ target }) => {
    setValue(target.value);
  }

  return {
    value, 
    setValue,
    error,
    setError,
    onChange,
    validate:() => validate(value)
  };
}

export default useForm;
