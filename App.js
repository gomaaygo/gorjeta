import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';

const Page = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #36B55A;
`;

const Head = styled.Text`
  margin-top: 20px;
  text-align: center;
  font-size: 23px;
`;

const Input = styled.TextInput`
  width: 300px;
  height: 40px;
  background-color: #ffffff;
  margin: 10px 50px 0px 50px;
  border-radius: 5px;
`;

const Label = styled.Text`
  margin: 20px 50px 0px 50px;
`;

const Form = styled.View`
  width: 100%;
  height: 100%;
`;

const Btn = styled.Button`
  background: black;
`;

const App = () => {
  return (
    <Page>
      <Head>
      {`Calculadora\nde\nGorjeta`}
      </Head>
      <Form>
        <Label>Valor da Compra:</Label>
        <Input keyboardType="numeric"/>
        <Label>Porcentagem:</Label>
        <Input keyboardType="numeric"/>
        <Btn title="CALCULAR"/>
      </Form>
    </Page> 
  );
};

export default App;
