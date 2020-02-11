import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { 
  createAppContainer,
  StackNavigator,NavigationActions ,createSwitchNavigator} from 'react-navigation';


import Decks from '../components/Decks'
import AddCard from '../components/AddCard'
import AddDeck from '../components/AddDeck'

import DeckInfo from '../components/DeckInfo'
import Quiz from '../components/Quiz'

import {black,white,lightBlue} from '../utils/colors'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});
const HomeStack = createStackNavigator({
  Home:{
    screen:Decks,
    navigationOptions:{
      headerTintColor: white,
      headerStyle:{
        backgroundColor: black
      },
      headerBackTitle: null,
      title: "Quiz"
    }
  },
  Quiz:{
    screen: Quiz,
    navigationOptions:{
      headerTintColor: '#fff',
      headerStyle:{
        backgroundColor: black
      },
      headerBackTitle: null,
      title: "Quiz"
    }
  },
  AddCard:{
    screen: AddCard,
    navigationOptions:{
      headerTintColor: white,
      headerStyle:{
        backgroundColor: black
      },
      headerBackTitle: null,
      title: "Add Card"
    }
  },
  DeckInfo:{
    screen: DeckInfo,
    navigationOptions:{
      headerTintColor: white,
      headerStyle:{
        backgroundColor: black
      },
      headerBackTitle: null,
      title: "Info"
    }
  }

});

const AddDeckStack = createStackNavigator({
  AddDeck: AddDeck,
  DeckInfo: DeckInfo,



})



export const MainStack = 
      createBottomTabNavigator({
      Home: {screen: HomeStack,
        navigationOptions:{
          title: 'Home',
          headerBackTitle: 'A much too long text for back button from B to A',
          tabBarVisible: true,
          tabBarOptions: {
            activeTintColor: white,
            inactiveTintColor: black,
            showIcon: true,
            style: {
                backgroundColor:lightBlue,
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
              }
          }
        } 
      },
      AddDeck: {screen:AddDeckStack,
        navigationOptions:{
          title: 'AddDeck',
          tabBarVisible: true,
          tabBarOptions: {
            activeTintColor: white,
            inactiveTintColor: black,
            showIcon: true,
            style: {
                backgroundColor:lightBlue,
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
              }
          }
        }
      }
      
      
      
     
     
    });

HomeStack.navigationOptions = ({ navigation }) => {
 
  return {
    tabBarLabel: "Decks",
     
    tabBarBackgroundColor:'',
       


  };
  
  };
  
  
  
  AddDeckStack.navigationOptions = ({ navigation }) => {
 
    return {
      tabBarLabel: "ADD Decks",
       
      tabBarBackgroundColor:'#fff',
         
  //     tabBarIcon: ({ focused, tintColor }) => (
  // <Entypo name='list' size={30} color={tintColor} />    )
  
    };
    
    };
    
    
    

  

    


export const AppNavigator = createStackNavigator({
  Home: {
      screen: Decks
  },
  

  
});


export default createAppContainer(
  createSwitchNavigator(
    {
      App: MainStack,
    },
    {
      initialRouteName: 'App',
    }
  )
)
