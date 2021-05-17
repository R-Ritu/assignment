
import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { interceptors } from "./src/helpers/APIClient";
import ErrorBoundary from './src/helpers/ErrorBoundry';
import setupStore from './src/redux/store';
import Router from './src/routes';
const App: React.FC = () => {
  const { store, persister } = setupStore();
  interceptors(store);
  return (
    <ErrorBoundary>
       <Provider store={store}>
        <PersistGate loading={null} persistor={persister}>
        <Router />
        </PersistGate>
      </Provider>
    </ErrorBoundary>

  );
};

export default App;
