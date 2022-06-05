import React from 'react';
import { FlatList } from 'react-native';

import { Match } from '../Match';
import { TEAMS } from '../../utils/teams';

import { Container, Title } from './styles';
import { Search } from '../Search';

export function Matches() {

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
            accessibilityActions={[
              // o name é o nome do evento, a label é a descrição do que faz
              // activate é um click simples
              { name: 'activate', label: 'Ver detalhes do jogo.' },
              // o longpress é o evento que quando o usuário clica no botão vai
              // segurar por um tempo
              { name: 'longpress', label: 'Atualizar o placar do jogo.' }
            ]}
          />
        )}
      />
    </Container>
  );
}