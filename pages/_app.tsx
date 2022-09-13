import { AppProps } from 'next/app';
import '../css/app.css';
import TheMeta from '../components/TheMeta';
import TheAppReveal from '../components/TheAppReveal';
import { AppIsReadyProvider } from '../context/appIsReady';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="app relative border">
    <AppIsReadyProvider>
      <TheMeta />
      <Component {...pageProps} />
      <TheAppReveal />
    </AppIsReadyProvider>
    </div>
  );
};

export default App;
