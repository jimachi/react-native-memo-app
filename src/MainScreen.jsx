import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { List, FAB } from 'react-native-paper';
import format from 'date-fns/format';
import { useNavigation } from '@react-navigation/native';

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
    text:"長いメモメモメモメモメモメモメモメモメモメモメモメモメモメモ",
    createdAt:1585459500000, // 2020.03.2914:25
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
  const navigation = useNavigation();

  const onPressAdd = () => {
    navigation.navigate('Compose');
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={memos}
        keyExtractor={item => `${item.createdAt}`}
        renderItem={({ item }) => (
          <List.Item
            title={item.text}
            titleNumberOfLines={5}
            description={`作成日時: ${format(item.createdAt, 'yyyy.MM.dd HH:mm')}`}
            descriptionStyle={{ textAlign: 'right' }}
          />
        )}
      />
      <FAB
        style={{
          position: 'absolute',
          right: 16,
          bottom: 16,
        }}
        icon="plus"
        onPress={onPressAdd}
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
