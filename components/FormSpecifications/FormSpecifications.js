import styles from './FormSpecifications.module.scss';

const FormSpecifications = () => {
  return (
    <ul className={styles.specificationsList}>
      <li>Nenhum campo pode ficar vazio</li>
      <li>O Usuário só deve conter letras e/ou números</li>
      <li>O Usuário deve conter entre 3 a 12 caracteres no máximo</li>
      <li>A Senha deve conter entre 6 a 12 caracteres no máximo</li>
    </ul>
  )
}

export default FormSpecifications