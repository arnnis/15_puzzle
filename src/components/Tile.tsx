import React, {FC} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import {ITile} from '../types';
import {TILE_SIZE, TILE_MARGIN} from '../consts';

interface Props {
  tile: ITile | null;
  index: number;
  onPress(tile: ITile | null, index: number): void;
}

const Tile: FC<Props> = ({tile, index, onPress}) => (
  <TouchableOpacity
    onPress={() => onPress(tile, index)}
    style={[
      styles.container,
      {backgroundColor: tile ? 'yellow' : 'transparent'},
    ]}>
    <Text>{tile?.title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    width: TILE_SIZE,
    height: TILE_SIZE,
    backgroundColor: 'yellow',
    marginRight: TILE_MARGIN,
    marginBottom: TILE_MARGIN,
  },
});

export default Tile;
