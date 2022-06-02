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
      />

      <Logo source={logoImg} />

      <TouchableOpacity>
        <FontAwesome name="power-off" size={24} color="#595859" />
      </TouchableOpacity>
    </Container>
  );
}