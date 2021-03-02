import '../styles/globals.css';
import { UserProvider } from '@auth0/nextjs-auth0';
import Nav from '../layouts/Nav.js';

function MyApp({ Component, pageProps }) {
  console.log({pageProps});
  return (
    <div>
      <UserProvider>
        <Nav />
        <Component {...pageProps} />
      </UserProvider>
    </div>
  );
}

export default MyApp
