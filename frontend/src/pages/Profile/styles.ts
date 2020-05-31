import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  width: 100%;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;

      font-size: 20px;
      text-align: left;
    }

    div[name='old_password'] {
      margin-top: 24px;
    }

    a {
      display: block;
      margin-top: 24px;

      color: #f4ede8;

      transition: 0.22s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }
`;

export const AvatarInput = styled.div`
  position: relative;

  width: fit-content;
  margin: 0 auto 32px;

  img {
    width: 186px;
    height: 186px;

    border-radius: 50%;
  }

  button {
    position: absolute;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 48px;
    height: 48px;
    border: 0;
    border-radius: 50%;

    background: #ff9000;

    transition: background 0.3s;

    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }

    svg {
      height: 20px;
      width: 20px;
    }
  }
`;
