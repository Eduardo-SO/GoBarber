import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  border-radius: 10px;
  padding-left: 16px;

  border: 2px solid #232129;
  background: #232129;
  color: #666360;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    padding: 16px 0;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
