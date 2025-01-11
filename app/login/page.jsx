import { login, signup } from './actions';

export default function LoginPage() {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        name="email"
        type="email"
        style={{ color: 'black', marginRight: '20px' }}
        required
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        name="password"
        type="password"
        style={{ color: 'black', marginRight: '20px' }}
        required
      />
      <br />
      <button formAction={login}>Log in</button>
      <br />
      <button formAction={signup}>Sign up</button>
    </form>
  );
}
