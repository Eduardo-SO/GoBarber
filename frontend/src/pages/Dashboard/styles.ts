import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
  padding: 32px 0;
  background: #28262e;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;

  max-width: 1120px;
  margin: 0 auto;

  > img {
    height: 80px;
  }

  button {
    margin-left: auto;

    background: transparent;
    border: 0;

    svg {
      color: #999591;
      height: 20px;
      width: 20px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  margin-left: 80px;

  img {
    height: 56px;
    width: 56px;

    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      color: #f4ede8;
    }

    strong {
      color: #ff9000;
    }
  }
`;

export const Content = styled.main`
  display: flex;

  max-width: 1120px;
  margin: 64px auto;
`;

export const Schedule = styled.div`
  flex: 1;
  margin-right: 120px;

  h1 {
    font-size: 36px;
  }

  p {
    display: flex;

    margin-top: 8px;
    color: #ff9000;
    align-items: center;

    span {
      display: flex;
      align-items: center;
    }

    span + span::before {
      content: '';
      width: 1px;
      height: 12px;
      margin: 0 8px;

      background: #ff9000;
    }
  }
`;

export const NextAppointments = styled.aside`
  margin-top: 64px;

  > strong {
    color: #999591;

    font-size: 20px;
    font-weight: 400;
  }

  div {
    display: flex;
    align-items: center;

    position: relative;
    padding: 16px 24px;
    border-radius: 10px;
    margin-top: 24px;

    background: #3e3b47;

    &::before {
      content: '';

      position: absolute;
      left: 0;
      top: 10%;

      height: 80%;
      width: 1px;

      background: #ff9000;
    }

    img {
      width: 80px;
      height: 80px;

      border-radius: 50%;
    }

    strong {
      margin-left: 24px;
      color: #fff;
    }

    span {
      display: flex;
      align-items: center;

      margin-left: auto;

      color: #999591;

      svg {
        color: #ff9000;
        margin-right: 8px;
      }
    }
  }
`;

export const Section = styled.section`
  margin-top: 48px;

  > strong {
    display: block;

    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid #3e3b47;

    font-size: 20px;
    line-height: 26px;

    color: #999591;
  }
`;

export const Appointment = styled.div`
  display: flex;
  align-items: center;

  & + div {
    margin-top: 16px;
  }

  span {
    display: flex;
    align-items: center;

    margin-left: auto;

    color: #f4ede8;

    svg {
      color: #ff9000;
      margin-right: 8px;
    }
  }

  div {
    flex: 1;
    display: flex;
    align-items: center;

    padding: 16px 24px;
    border-radius: 10px;
    margin-left: 24px;

    background: #3e3b47;

    img {
      width: 56px;
      height: 56px;

      border-radius: 50%;
    }

    strong {
      margin-left: 24px;
      color: #fff;
      font-size: 20px;
      font-weight: 300;
    }
  }
`;

export const Calendar = styled.aside`
  width: 380px;
`;
