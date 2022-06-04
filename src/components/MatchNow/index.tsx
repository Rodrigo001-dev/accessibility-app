import React from 'react';
import { Container, Title, Turn, Image, Score, Play, LeagueLogo } from './styles';
import { MATCH } from '../../utils/match';

export function MatchNow() {
  return (
    <Container
      accessible // informando que o Container é um componente acessível
      // no accessibilityLabel eu coloco qual é a informação que eu quero que o
      // leitor leia para o usuário 
      accessibilityLabel={`Neste exato momento está acontecendo um jogo fenomenal, aguenta coração!, estão jogando ${MATCH.host_name} contra ${MATCH.visitor_name}. O placar agora é ${MATCH.score}.`}
    >
      <Title>{MATCH.league}</Title>
      <Turn>{MATCH.turn}</Turn>

      <Play>
        <Image source={MATCH.host_logo} />
        <Score>{MATCH.score}</Score>
        <Image source={MATCH.visitor_logo} />
      </Play>

      <LeagueLogo source={MATCH.league_logo} />
    </Container >
  );
}