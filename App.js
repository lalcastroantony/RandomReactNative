import React, { Component } from "react";
import { Button, Text, View, SafeAreaView, StyleSheet, TextInput, FlatList, Appearance } from "react-native";

class Cat extends Component {
  state = { isHungry: true };

  render() {
    return (
      <View>
        <Text>
          I am {this.props.name}, and I am
          {this.state.isHungry ? " hungry" : " full"}!
        </Text>
        <Button
          onPress={() => {
            this.setState({ isHungry: false });
          }}
          disabled={!this.state.isHungry}
          title={
            this.state.isHungry ? "Pour me some milk, please!" : "Thank you!"
          }
        />
      </View>
    );
  }
}

class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ""};
  }
  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
          defaultValue={this.state.text}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
 
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: Appearance.getColorScheme() === 'dark' ? 'black':'white'
   },
   item: {
     padding: 10,
     fontSize: 18,
     height: 44,
   },
   containerSafe: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: 'yellow'
   }
});

class Cafe extends Component {
  render() {
    return (
      <SafeAreaView style={styles.containerSafe}>
      <>
         <View style={styles.container}>
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
      {/* <PizzaTranslator /> */}
        {/* <Cat name="Munkustrap" />
        <Cat name="Spot" /> */}
      </>
      </SafeAreaView>
    );
  }
}

export default Cafe;