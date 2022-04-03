import { useState } from 'react';
import ButtonAtom from '../../../components/common/ButtonAtom';
import InputAtom from '../../../components/common/InputAtom';
import styles from './Login.module.scss';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles['login-wrap']}>
      <div className={styles['login-content']}>
        <h1>Welcome</h1>
        <p>Please Login to your account</p>
        <form onSubmit={handleSubmit}>
          <InputAtom
            required
            label='User Name'
            placeholder='type your name...'
            id='userName'
            name='username'
            handleInput={(e) => setUserName(e.target.value)}
            value={userName}
            type='text'
          />
          <InputAtom
            required
            label='Password'
            placeholder='*************'
            id='password'
            name='password'
            handleInput={(e) => setPassword(e.target.value)}
            value={password}
            type='password'
          />
          <ButtonAtom label='login' />
        </form>
      </div>
    </div>
  );
};

export default Login;
