import React, {useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Tile from './Tile';
import {GRID_SIZE, GRID_PADDING} from '../consts';
import {generateGame, exchangeTilePlace} from '../slices/game-slice';
import {RootState} from '../store/configureStore';

const Grid = () => {
  const tiles = useSelector((state: RootState) => state.game.tiles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(generateGame());
  }, []);

  const moveTile = (index: number) => {
    // can go right
    if (tiles[index + 1] === null) {
      dispatch(exchangeTilePlace({from: index, to: index + 1}));
      return;
    }

    // can go left
    if (tiles[index - 1] === null) {
      dispatch(exchangeTilePlace({from: index, to: index - 1}));
      return;
    }

    // can go upward
    if (tiles[index - 4] === null) {
      dispatch(exchangeTilePlace({from: index, to: index - 4}));
      return;
    }

    // can go downward
    if (tiles[index + 4] === null) {
      dispatch(exchangeTilePlace({from: index, to: index + 4}));
      return;
    }
  };

  const handleShufflePress = () => dispatch(generateGame());

  const renderShuffleButton = () => (
    <TouchableOpacity style={styles.shuffleButton} onPress={handleShufflePress}>
      <Text style={styles.shuffleButtonTitle}>Shuffle</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {tiles.map((tile, i) => (
        <Tile key={i} tile={tile} index={i} onPress={moveTile} />
      ))}
      {renderShuffleButton()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: GRID_SIZE,

    marginHorizontal: 'auto',
    backgroundColor: '#222B39',
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingLeft: GRID_PADDING,
    paddingTop: GRID_PADDING,
    borderRadius: 5,
  },
  shuffleButton: {
    width: '40%',
    height: 45,
    backgroundColor: '#7D2323',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: GRID_PADDING,
    marginTop: 5,
  },
  shuffleButtonTitle: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default Grid;
