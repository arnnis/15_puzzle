import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ITile} from '../types';
import {shuffleArray} from '../utils';

export type GameState = {
  tiles: (ITile | null)[]; // null is the empty position in puzzle.
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

      // add the empty position in puzzle
      tiles.push(null);

      // add other tiles
      for (let i = 0; i < 15; i++) {
        tiles.push({title: (i + 1).toString()});
      }

      state.tiles = shuffleArray(tiles);
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
