import '../styles/globals.css';
import { MotionConfig } from 'framer-motion';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <MotionConfig reducedMotion='user'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MotionConfig>
  );
}

export default MyApp;
