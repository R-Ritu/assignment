import storage from '@react-native-community/async-storage';
import { createStore, compose, applyMiddleware } from 'redux';
import reducers from '../reducers';
import { persistCombineReducers, persistStore } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const persistConfig = {
  whitelist: ['user'],
  storage,
  key: 'root',
};

export default () => {
  const persistReducer = persistCombineReducers(persistConfig, reducers);
  const store = createStore(
    persistReducer,
    compose(applyMiddleware(logger, thunk)),
  );
  const persister = persistStore(store);
  return { store, persister };
};
