import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Container, Input, Button } from './styles';

export function Search() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 9000);
  }, [loading]);

  return (

    <Container>
      {
      /*
        no TextInput uma estratégia de acessibilidade é utilizar o placeholder
      */
      }
      <Input
        placeholder="Encontrar partida pelo nome..."
      />

      <Button
        onPress={() => setLoading(!loading)}
        // quando o loading esta ativo eu estou desabilitando o Button 
        disabled={loading}
        // o accessibilityHint é para mostrar para o usuário o que vai acontecer
        // se ele clicar no Button
        accessibilityHint="Consultar partidas pelo nome do time."
        // o accessibilityState é para informar para o usuário qual o estado
        // atual no Button(ex: o usuário clicou no Button e vai fazer um loading,
        // nesse momento o estado atual do Button é carregando)
        // o loading é o estado
        accessibilityState={{ disabled: loading }}
        // o accessibilityValue estou dizendo qual o texto que o leitor vai lêr
        // básicado no meu estado
        accessibilityValue={{ text: loading ? 'Buscando partidas, aguarde.' : 'Botão de pesquisa disponível novamente.' }}
      >
        {
          loading
            ? <ActivityIndicator color="#FFF" />
            : <Feather name="search" size={18} color="#FFF" />
        }
      </Button>
    </Container>
  );
}