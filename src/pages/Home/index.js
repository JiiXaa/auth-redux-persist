import ButtonAtom from '../../components/common/ButtonAtom';
import styles from './Home.module.scss';

const Home = () => {
  const handleLogout = () => {
    console.log('logout');
  };

  return (
    <div className={styles.home}>
      <div className={styles['home-content']}>
        <h1>Welcome Home 🍄</h1>
        <ButtonAtom type='button' label='logout' handleClick={handleLogout} />
      </div>
    </div>
  );
};

export default Home;
