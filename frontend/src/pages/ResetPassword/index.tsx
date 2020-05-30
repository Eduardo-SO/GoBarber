import React, { useRef, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

// import api from '../../services/api';

import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/toast';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';
import { Container, Content, AnimationContainer, Background } from './styles';

interface ResetPasswordFormData {
  password: string;
  password_confirmation: string;
}

const ResetPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: ResetPasswordFormData) => {
      setLoading(true);

      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          password: Yup.string()
            .min(6, 'No mínimo 6 dígitos')
            .required('Senha obrigatória'),
          password_confirmation: Yup.string()
            .oneOf([Yup.ref('password'), undefined], 'Confirmação incorreta')
            .required('Confirme a senha'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        // await api.post('password/reset', {
        //   password: data.password,
        //   password_confirmation: data.password_confirmation,
        // });

        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }

        addToast({
          type: 'error',
          title: 'Erro ao resetar sua senha',
          description: 'Ocorreu um erro ao resetar sua senha, tente novamente',
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="GoBarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Resetar Senha</h1>

            <Input
              icon={FiLock}
              type="password"
              name="password"
              placeholder="Nova senha"
            />
            <Input
              icon={FiLock}
              type="password"
              name="password_confirmation"
              placeholder="Confirmação da senha"
            />

            <Button loading={loading} type="submit">
              Alterar senha
            </Button>
          </Form>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default ResetPassword;
