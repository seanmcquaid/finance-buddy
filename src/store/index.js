import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import budgetReducer from './budget/reducer';
import mortgageReducer from './mortgage/reducer';
import retirementReducer from './retirement/reducer';
import loadingReducer from './loading/reducer';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';

const rootReducer = combineReducers({
  budgetReducer: budgetReducer,
  mortgage: mortgageReducer,
  retirement: retirementReducer,
  loading: loadingReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = (preloadedState) => {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(
    persistedReducer,
    preloadedState,
    composedEnhancers,
  );

  const persistor = persistStore(store);

  return { store, persistor };
};

export default configureStore;
