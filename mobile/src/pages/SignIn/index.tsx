import React from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';

import logoImg from '../../assets/logo.png';

const SignIn: React.FC = () => {
  return (
    <>
      <Container>
        <Image source={logoImg} />

        <Title>Faça seu Logon</Title>

        <Input name="email" icon="mail" placeholder="Email" />
        <Input name="password" icon="lock" placeholder="Senha" />

        <Button
          onPress={() => {
            console.log('Clicou');
          }}
        >
          Entrar
        </Button>

        <ForgotPassword
          onPress={() => {
            console.log('Clicou');
          }}
        >
          <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
        </ForgotPassword>
      </Container>
      <CreateAccountButton
        onPress={() => {
          console.log('Clicou');
        }}
      >
        <Icon name="log-in" size={20} color="#ff9000" />
        <CreateAccountButtonText>Criar conta</CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};

export default SignIn;
