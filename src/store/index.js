import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import budgetReducer from './budget/reducer';
import mortgageReducer from './mortgage/reducer';
import retirementReducer from './retirement/reducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const rootReducer = combineReducers({
  budget: budgetReducer,
  mortgage: mortgageReducer,
  retirement: retirementReducer,
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
