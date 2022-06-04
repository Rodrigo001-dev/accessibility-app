import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Container, Avatar, Logo } from './styles';

import logoImg from '../../assets/logo.png';

export function Header() {
  return (
    <Container>
      <Avatar
        source={{ uri: 'https://media-exp1.licdn.com/dms/image/C4D03AQHNbXe8srzXoQ/profile-displayphoto-shrink_200_200/0/1592671000196?e=1659571200&v=beta&t=KQoxJZMBtHBshgw_VqE792T8tA4n4enSKmNuNT5v8SA' }}
        accessible // informando que o Container é um componente acessível
        // no accessibilityLabel eu coloco qual é a informação que eu quero que o
        // leitor leia para o usuário
        accessibilityLabel="Imagem de perfil do usuário."
      />

      <Logo source={logoImg} />

      {
      /*
        No TouchableOpacity não é necessário colocar a propriedade accessible
        porque ele por padrão já é acessível, pois ele é um elemento de click
      */
      }
      <TouchableOpacity
        accessibilityLabel="Sair do aplicativo."
      >
        <FontAwesome name="power-off" size={24} color="#595859" />
      </TouchableOpacity>
    </Container>
  );
}