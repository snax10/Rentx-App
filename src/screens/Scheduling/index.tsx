import React from "react";
import { Button } from "../../components/Button";
import { Calendar } from "../../components/Calendar";
import { useTheme } from "styled-components";
import { BackButton } from "../../components/BackButton";
import { StatusBar } from "react-native";

import ArrowSvg from "../../assets/arrow.svg";

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DataValue,
  Content,
  Footer,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

export function Scheduling() {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleConfirmRental() {
    navigation.navigate("SchedulingDetails");
  }

  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <BackButton onPress={() => {}} color={theme.colors.shape} />

        <Title>
          Escolha uma {"\n"} data de início e {"\n"} fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DataValue selected={false}>18/06/2021</DataValue>
          </DateInfo>
          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATE</DateTitle>
            <DataValue selected={false}>18/06/2021</DataValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar />
      </Content>

      <Footer>
        <Button title="Confirmar" onPress={handleConfirmRental} />
      </Footer>
    </Container>
  );
}
