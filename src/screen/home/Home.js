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
          borderWidth: 1 / 2,
          borderColor: 'red',
          backgroundColor: 'white',
          borderRadius: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            borderBottomLeftRadius: 10,
            borderTopLeftRadius: 10,
            backgroundColor: 'crimson',
            height: 50,
            width: 15,
            marginLeft: -5.5,
            marginVertical: -5.5,
            borderColor: '#130f40',
          }}></View>
        <Text
          style={{
            color: 'black',
            fontSize: 15,
            marginLeft: 10,
            fontFamily: 'Roboto-Regular',
          }}>
          {item.nama}
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#192a56',
            width: 30,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 7,
            marginLeft: 320,
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
    <View style={{flex: 1, backgroundColor: '#3d3d3d'}}>
      <StatusBar barStyle={'light-content'} backgroundColor={'crimson'} />
      <View
        style={{
          width: '100%',
          height: 50,
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
          backgroundColor: '#192a56',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontFamily: 'Roboto-Bold', fontSize: 21}}>
          ToDoList
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
          backgroundColor: 'white',
          elevation: 3,
          borderRadius: 10,
          marginTop: -20,
          flexDirection: 'row',
        }}>
        <TextInput
          value={input}
          onChangeText={text => setInput(text)}
          placeholder="masukan nama disini"
          style={{marginLeft: 20, color: 'black'}}
        />
        <TouchableOpacity
          style={{
            backgroundColor: 'crimson',
            width: 30,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 7,
            marginLeft: 310,
            marginTop: 10,
            position: 'absolute',
          }}
          onPress={() => addTodo()}>
          <Text style={{fontSize: 21, color: 'white', fontWeight: '700'}}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Home;
