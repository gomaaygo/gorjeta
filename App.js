import React, {useState} from 'react';
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
  font-size: 17px;
`;

const Form = styled.SafeAreaView``;

const Div = styled.SafeAreaView`
  margin: 20px 50px 0px 50px;
  background-color: #36B55A;
`;

const Btn = styled.Button``;

const AreaResult = styled.SafeAreaView`
  background-color: grey;
  padding: 25px 25px 25px 25px;
  margin-top: 50px;
`;

const ItemResult = styled.Text`
  font-size: 16px;
`;

const App = () => {
  const [valor_compra, alteraCompra] = useState("");
  const [percentual, alteraPercentual] = useState("");
  const [valor_gorjeta, alteraGorjeta] = useState("");
  const [valor_total, alteraValorTotal] = useState("");

const calculaGorjeta = () => {
  var valor_gorjeta = (parseFloat(valor_compra)*percentual)/100;
  var valor_total = parseFloat(valor_compra)+valor_gorjeta;
  return alteraGorjeta(valor_gorjeta.toFixed(2)), alteraValorTotal(valor_total.toFixed(2));
};

  return (
    <Page>
      <Head>
      {`Calculadora\nde\nGorjeta`}
      </Head>
      <Form>
        <Label>Valor da Compra:</Label>
        <Input keyboardType="numeric" value={valor_compra} onChangeText={(valor_compra) => alteraCompra(valor_compra)} />
        <Label>Porcentagem:</Label>
        <Input keyboardType="numeric" value={percentual} onChangeText={(percentual) => alteraPercentual(percentual)} />
        <Div>
          <Btn title="CALCULAR" onPress={calculaGorjeta}/>
        </Div>
      </Form>
      <AreaResult>
        <ItemResult>Valor da Compra</ItemResult>
        <ItemResult>R$: {valor_compra}</ItemResult>
        <ItemResult>Valor da Gorjeta</ItemResult>
        <ItemResult>R$: {valor_gorjeta} ({percentual}%)</ItemResult>
        <ItemResult>Valor da Total</ItemResult>
        <ItemResult>R$: {valor_total}</ItemResult> 
      </AreaResult>
    </Page> 
  );
};

export default App;
