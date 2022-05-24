import { useState } from 'react';
import styles from '../styles/Home.module.scss';
import FormSpecifications from '../components/FormSpecifications/FormSpecifications';
import Input from "../components/Input/Input";
import useForm from '../hooks/useForm';

const Home = () => {
  const [failPassword, setFailPassword] = useState(null);
  const [limitCharacters, setLimitCharacters] = useState(null);
  const [check, setCheck] = useState(false);

  const name = useForm();
  const secondName = useForm();
  const email = useForm('email');
  const user = useForm('user');
  const password = useForm();
  const repeatPassword = useForm();

  const handleSubmit = e => {
    e.preventDefault();

    const password = passwordsdAreValid();
    const username = userAreValid();

    if (name.validate() && secondName.validate() && email.validate() && user.validate() && username && password) {
      setTimeout(() => {
        alert('Formulário enviado com sucesso!');
      }, 600);
    }
  }

  const passwordsdAreValid = () => {
    if (password.value.length < 6 || password.value.length > 12) {
      setFailPassword('A Senha deve conter de 6 a 12 caracteres no máximo');
      return false;
    }

    if (password.value !== repeatPassword.value) {
      setFailPassword('As senhas são diferentes');
      return false;

    } else {
      setFailPassword(null);
      return true;
    }
  }

  const userAreValid = () => {
    if (user.value.length < 3 || user.value.length > 12) {
      setLimitCharacters('O Usuário deve conter de 3 a 12 caracteres no máximo');
      return false;

    } else {
      setLimitCharacters(null);
      return true;
    }
  }

  return (
    <section>
      <div className='formContainer'>
        <div>
          <h1>Formulário de cadastro</h1>
          <FormSpecifications />

          <form onSubmit={handleSubmit} className={styles.formArea}>
            <Input id='name' placeholder='Primeiro Nome' type='text' {...name} />
            <Input id='secondName' placeholder='Sobrenome' type='text' {...secondName} />
            <Input id='email' placeholder='Email' type='text' {...email} />
            <Input id='user' placeholder='Usuário' type='text' {...user} />
            {limitCharacters && <p>{limitCharacters}</p>}
            <Input id='password' placeholder='Senha' type={check ? 'text' : 'password'} {...password} />
            {failPassword && <p>{failPassword}</p>}
            <Input id='repeatPassword' placeholder='Repetir Senha' type={check ? 'text' : 'password'} {...repeatPassword} />

            <label className={styles.showPassword}>
              <input type="checkbox" onClick={() => setCheck(!check)} />
              Exbir Senha
            </label>

            <button>Enviar</button>
          </form>

        </div>
      </div>
    </section>
  )
}

export default Home;
