import {Dimensions} from 'react-native';

export const GRID_SIZE = Dimensions.get('window').width * (88 / 100);
export const GRID_PADDING = 10;

export const TILE_MARGIN = GRID_PADDING;
export const TILE_SIZE = (GRID_SIZE - GRID_PADDING) / 4 - TILE_MARGIN;
