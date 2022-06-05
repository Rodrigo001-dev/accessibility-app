import React from 'react';
import { FlatList } from 'react-native';

import { Match } from '../Match';
import { TEAMS } from '../../utils/teams';

import { Container, Title } from './styles';
import { Search } from '../Search';

export function Matches() {
  function handleAccessibilityAction(actionName: string) {
    console.log("Ação do usuário: ", actionName);
  };

  return (
    <Container>
      <Title>Próximas partidas</Title>

      <Search />

      <FlatList
        data={TEAMS}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Match
            data={item}
            // o accessibilityActions vai sendo colocado as opções que estão
            // disponíveis para uma determinada região de interação de click e
            // essas opções vão ser lidas para o usuário
            accessibilityActions={[
              // o name é o nome do evento, a label é a descrição do que faz
              // activate é um click simples
              { name: 'activate', label: 'Ver detalhes do jogo.' },
              // o longpress é o evento que quando o usuário clica no botão vai
              // segurar por um tempo
              { name: 'longpress', label: 'Atualizar o placar do jogo.' }
            ]}
            // o actionName retorna qual é o nome do evento que o usuário
            // selecionou(se foi um activate ou um longpress)
            // está sendo passado para a handleAccessibilityAction qual é o
            // actionName
            onAccessibilityAction={e => handleAccessibilityAction(e.nativeEvent.actionName)}
          />
        )}
      />
    </Container>
  );
}