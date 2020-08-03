import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Alert,
  Text,
  TouchableOpacity,
} from 'react-native';
import Tile from './Tile';
import {ITile} from '../types';
import {GRID_SIZE, GRID_PADDING} from '../consts';
import {shuffle} from '../utils';

const Grid = () => {
  const [tiles, setTiles] = useState<(ITile | null)[]>([]);

  useEffect(() => {
    setTiles(generateGame());
  }, []);

  const generateGame = () => {
    let tiles: (ITile | null)[] = [];
    tiles.push(null);
    for (let i = 0; i < 15; i++) {
      const isEven = i % 2 === 0;
      tiles.push({title: (i + 1).toString(), position: i, isEven});
    }

    return shuffle(tiles);
  };

  const moveTile = (tile: ITile, index: number) => {
    // can go right
    if (!isInFarRightColumn(index) && tiles[index + 1] === null) {
      // Alert.alert('it can', 'right');
      exchangePlace(index, index + 1);
    }

    // can go left
    if (!isInFarLeftColumn(index) && tiles[index - 1] === null) {
      // Alert.alert('it can', 'left');
      exchangePlace(index, index - 1);
    }

    // can go upward
    if (!isInFarTopRow(index) && tiles[index - 4] === null) {
      // Alert.alert('it can', 'top');
      exchangePlace(index, index - 4);
    }

    // can go downward
    if (!isInFarBottomRow(index) && tiles[index + 4] === null) {
      // Alert.alert('it can', 'bottom');
      exchangePlace(index, index + 4);
    }
  };

  const isInFarRightColumn = (position: number) => (position + 1) % 4 === 0;
  const isInFarLeftColumn = (position: number) => position % 4 === 0;
  const isInFarTopRow = (position: number) => position < 4;
  const isInFarBottomRow = (position: number) => position > 11;

  const exchangePlace = (index1: number, index2: number) => {
    let _tiles = [...tiles];
    let temp = _tiles[index1];
    _tiles[index1] = _tiles[index2];
    _tiles[index2] = temp;
    setTiles(_tiles);
  };

  const handleShufflePress = () => {
    setTiles(generateGame());
  };

  const renderShuffleButton = () => (
    <TouchableOpacity style={styles.shuffleButton} onPress={handleShufflePress}>
      <Text style={styles.shuffleButtonTitle}>Shuffle</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {tiles.map((tile, i) => (
        <Tile tile={tile} index={i} onPress={moveTile} />
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
