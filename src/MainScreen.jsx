import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { List } from 'react-native-paper';

const memos = [
  {
    text:"メモメモメモ",
    createdAt:1585574700000,  // 2020.03.3022:25
  },
  {
    text:"メモメモメモ",
    createdAt:1585567500000,  // 2020.03.3020:25
  },
  {
    text:"長いメモメモメモメモメモメモメモメモメモメモメモメモメモメモ",createdAt:1585459500000, // 2020.03.2914:25
  },
  {
    text:"メモメモメモ",
    createdAt:1585369500000, // 2020.03.2813:25
  },
  {
    text:"メモメモメモ",
    createdAt:1585275900000, // 2020.03.2711:25
  },
];

export const MainScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={memos}
        keyExtractor={item => `${item.createdAt}`}
        renderItem={({ item }) => (
          <List.Item
            title={item.text}
            description={item.createdAt}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
});
