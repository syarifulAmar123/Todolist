import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  Alert,
  StatusBar,
  ScrollView,
} from 'react-native';

const Home = () => {
  const [input, setInput] = useState('');
  const tombol = 'tombol oke di pencet';
  const [Todo, setTodo] = useState([
    {
      id: '12',
      nama: 'Bayu',
    },
    {
      id: '124',
      nama: 'Dennis',
    },
  ]);

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          margin: 15,
          padding: 5,
          backgroundColor: '#303c41',
          borderRadius: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            borderBottomLeftRadius: 10,
            borderTopLeftRadius: 10,
            backgroundColor: '#80cbc4',
            height: 50,
            width: 15,
            marginLeft: -5.5,
            marginVertical: -5.5,
          }}></View>
        <Text
          style={{
            color: 'grey',
            fontSize: 17,
            fontWeight: 'bold',
            marginLeft: 10,
            fontFamily: 'Roboto-Medium',
          }}>
          {item.nama}
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#142227',
            width: 30,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 7,
            position: 'absolute',
            right: 10,
            marginTop: 10,
            position: 'absolute',
          }}
          onPress={() => deleteTodo(item.id)}>
          <Text style={{fontSize: 21, color: 'white', fontWeight: '700'}}>
            -
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const addTodo = () => {
    if (input == '') {
      Alert.alert('maaf', 'isikan terlebih dahulu', [
        {
          text: 'Ok',
          onPress: () => console.log(tombol),
        },
        {
          text: 'No',
          onPress: () => console.log('Tombol No di Pencet'),
        },
      ]);
    } else {
      let numberRandom = Math.random();
      let newData = [...Todo, {id: numberRandom, nama: input}];
      setTodo(newData);
      setInput('');
    }
  };

  const deleteTodo = id => {
    let newsData = Todo.filter(value => value.id != id);
    setTodo(newsData);
  };
  return (
    <View style={{flex: 1, backgroundColor: '#1a2327'}}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#192227'} />
      <View
        style={{
          width: '100%',
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontFamily: 'Roboto-Bold',
            fontSize: 25,
          }}>
          Todolist
        </Text>
      </View>
      <FlatList
        data={Todo}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
      <View
        style={{
          margin: 20,
          backgroundColor: '#7f8c8d',
          borderRadius: 10,
          flexDirection: 'row',
        }}>
        <TextInput
          value={input}
          onChangeText={text => setInput(text)}
          placeholder="masukan nama disini ..."
          style={{marginLeft: 10, color: 'black'}}
        />
        <TouchableOpacity
          style={{
            backgroundColor: '#1c2227',
            width: 30,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 7,
            position: 'absolute',
            right: 15,
            marginTop: 10,
            position: 'absolute',
          }}
          onPress={() => addTodo()}>
          <Text style={{fontSize: 16, color: 'grey', fontWeight: 'bold'}}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Home;
