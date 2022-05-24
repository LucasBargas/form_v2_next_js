const Input = ({ id, label, onChange, value, type, placeholder, error }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input 
        id={id} 
        name={id} 
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />
      {error && <p>{error}</p>}
    </>
  )
}

export default Input;
