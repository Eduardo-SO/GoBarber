import React from 'react';

import { FiPower } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Container, Header, HeaderContent, Profile } from './styles';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />

            <div>
              <span>Bem-vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab numquam
        dolore eaque eos quaerat rerum similique ullam maiores alias qui?
      </h1>
    </Container>
  );
};

export default Dashboard;
