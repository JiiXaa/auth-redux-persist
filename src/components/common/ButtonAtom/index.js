import styles from './ButtonAtom.module.scss';

const ButtonAtom = ({ label, type, handleClick }) => {
  return (
    <button className={styles.btn} type={type} onClick={handleClick}>
      {label}
    </button>
  );
};

export default ButtonAtom;
