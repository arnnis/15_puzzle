import {createLogger} from 'redux-logger';
import {
  Action,
  configureStore as RTKConfigureStore,
  getDefaultMiddleware,
  ThunkAction,
} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {gameReducer} from '../slices/game-slice';

const rootReducer = combineReducers({
  game: gameReducer,
});

const logger = createLogger();

const middlewares = [...getDefaultMiddleware(), logger];

export const store = RTKConfigureStore({
  reducer: rootReducer,
  middleware: middlewares,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
