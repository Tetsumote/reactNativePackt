import styled from 'styled-components';

import Example1 from './example1';
import Row from './Row';
import Grid from './Grid';

const Box = styled.View`
  width:100px;
  height:100px;
  justify-content:center;
  align-items:center;
  background-color:lightgray
`;
 
const BoxText =  styled.Text`
  color:darkslategray;
  font-weight:bold
`

export default function App() {
  return (
    <Row />
  );
}

