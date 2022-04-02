import { useState } from 'react';
import InputAtom from '../../../components/common/InputAtom';
import styles from './Login.module.scss';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='login-wrap'>
      <div className='login-content'>
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
        </form>
      </div>
    </div>
  );
};

export default Login;
