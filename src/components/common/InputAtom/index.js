import styles from './InputAtom.module.scss';

const InputAtom = ({
  label,
  value,
  placeholder,
  handleInput,
  type,
  name,
  id,
  required,
}) => (
  <div className={styles['input-wrap']}>
    <label htmlFor={id} className={styles['input-label']}>
      {label}
    </label>
    <input
      type={type}
      id={id}
      required={required}
      className={styles.input}
      placeholder={placeholder}
      name={name}
      onChange={handleInput}
      value={value}
    />
    <span className={styles['input-grow']}></span>
  </div>
);

export default InputAtom;
