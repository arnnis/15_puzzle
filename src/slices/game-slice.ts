import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ITile} from '../types';
import {shuffle} from '../utils';

export type GameState = {
  tiles: (ITile | null)[];
};

const initialState: GameState = {
  tiles: [],
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    generateGame(state) {
      let tiles: (ITile | null)[] = [];
      tiles.push(null);
      for (let i = 0; i < 15; i++) {
        const isEven = i % 2 === 0;
        tiles.push({title: (i + 1).toString(), position: i, isEven});
      }
      state.tiles = shuffle(tiles);
    },
    exchangeTilePlace(
      state,
      action: PayloadAction<{from: number; to: number}>,
    ) {
      const {from, to} = action.payload;

      let temp = state.tiles[from];
      state.tiles[from] = state.tiles[to];
      state.tiles[to] = temp;
    },
  },
});

export const gameReducer = gameSlice.reducer;

export const {generateGame, exchangeTilePlace} = gameSlice.actions;
