/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Fragment} from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Styled from 'styled-components/native';
import { TodoListContextProvider } from '~/Context/TodoListContext';
import Todo from './Screen/Todo';

const Container = Styled.View`
  flex : 1;
  background-color : #EEE;
`;
const ScrollView = Styled.ScrollView`
  background-color : ${Colors.lighter};
 `;

const Body = Styled.View`
  ackground-color : ${Colors.white};
 `;

 const SectionContainer = Styled.View`
 margin-top : 32px;
 padding-horizontal : 24px;
`;

const SectionDescription = Styled.Text`
  margin-top : 8px;
  font-size : 18px;
  font-weight : 400;
  color : ${Colors.dark};
`;

const HighLight = Styled.Text`
  font-weight : 700;
  `;

const App: () => {
  return (
    <TodoListContextProvider>
      <Container>
       <Todo/>
      </Container>
    </TodoListContextProvider>
  );
};

export default App;
