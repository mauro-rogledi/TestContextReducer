import React from 'react';
import {Button, Text, View} from 'react-native';
import {darkTheme, lightTheme, useTheme} from './ThemeContext';

export function ChangeColor() {
  const {theme, dispatch} = useTheme();
  return (
    <View style={{backgroundColor: theme.background, flex: 1}}>
      <Text style={{color: theme.color}}>Change Color</Text>
      <Button
        title="Dark Theme"
        onPress={() => {
          console.log('dark');
          dispatch({type: 'Theme', payload: darkTheme});
        }}
      />
      <Button
        title="Light Theme"
        onPress={() => {
          console.log('white');
          dispatch({type: 'Theme', payload: lightTheme});
        }}
      />
      <Button
        title="Text red"
        onPress={() => {
          dispatch({type: 'Color', payload: 'red'});
        }}
      />
      <Button
        title="Text green"
        onPress={() => {
          dispatch({type: 'Color', payload: 'green'});
        }}
      />
      <Button
        title="Background gray"
        onPress={() => {
          dispatch({type: 'Background', payload: 'gray'});
        }}
      />
    </View>
  );
}
