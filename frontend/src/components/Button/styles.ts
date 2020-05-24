import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  width: 100%;
  height: 56px;
  padding: 0 16px;
  margin-top: 16px;

  font-weight: 600;

  border: 0;
  color: #312e38;
  background: #ff9000;
  border-radius: 10px;

  transition: 0.22s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
