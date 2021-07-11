import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import LoadingSpinner from './components/LoadingSpinner';
import Routes from './containers/Routes';
import Layout from './Layout';
import configureStore from './store';

const { store, persistor } = configureStore();

const App = () => (
  <Provider store={store}>
    <PersistGate
      persistor={persistor}
      loading={<LoadingSpinner isLoading={true} />}>
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

export default App;
