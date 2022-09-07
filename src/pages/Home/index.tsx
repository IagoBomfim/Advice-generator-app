import React, { useState, useEffect } from 'react';

import { Container, Box, Text, TextTop, Circle, Spiner } from './Styles';
import Line from '../icons/pattern-divider-desktop';
import Dice from '../icons/icon-dice';

import { Api } from '../../services/api';

interface AdviceType {
  advice: String;
  id: Number;
}

export default function index() {
  const [AdviceData, setAdviceData] = useState<AdviceType>();
  const [Load, SetLoad] = useState(true);

  let getAdivice = () => {
    SetLoad(true)
    Api
      .get("/advice")
      .then((response) => {
        setAdviceData(response.data.slip)
        SetLoad(false)
      })
      .catch((err) => {console.log(err)});
  }


  useEffect(() => {
    getAdivice();
  }, []);

  return (
    <Container>
      <Box>
        <TextTop> <> ADVICE #{AdviceData?.id} </> </TextTop>
        <Text>{AdviceData?.advice}</Text>
        <Line />
      </Box>
      <Circle onClick={getAdivice}>
       {Load? <Spiner /> : <Dice />}
      </Circle>
    </Container>
  );
};