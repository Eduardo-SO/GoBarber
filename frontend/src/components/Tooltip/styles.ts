import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    position: absolute;
    transform: translateX(-50%);
    bottom: calc(100% + 12px);
    left: calc(50% - 8px);

    width: 160px;
    padding: 8px;
    border-radius: 4px;

    font-size: 14px;
    font-weight: 500;

    background: #ff9000;
    color: #312e38;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s;

    &::before {
      content: '';

      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);

      border-style: solid;
      border-color: #ff9000 transparent;
      border-width: 6px 6px 0 6px;
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
