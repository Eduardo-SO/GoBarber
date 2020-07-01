import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  padding: 0 24px;
`;

export const Title = styled.Text`
  margin-top: 48px;

  color: #f4ede8;

  text-align: center;
  font-size: 32px;
  font-family: 'RobotoSlab-Medium';
`;

export const Description = styled.Text`
  margin-top: 16px;

  color: #999591;

  text-align: center;
  font-family: 'RobotoSlab-Regular';
  font-size: 18px;
`;

export const OkButton = styled(RectButton)`
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  margin-top: 24px;
  padding: 12px 24px;

  background: #ff9000;
`;

export const OkButtonText = styled.Text`
  color: #312e38;

  font-family: 'RobotoSlab-Medium';
  font-size: 18px;
`;
