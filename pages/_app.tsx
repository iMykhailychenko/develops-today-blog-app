import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../redux/store';

import '../styles/styles.css';

const CustomApp = ({ Component, pageProps }: AppProps) => {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
};

export default CustomApp;
