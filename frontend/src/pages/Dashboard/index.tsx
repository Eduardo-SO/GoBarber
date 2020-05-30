import React, { useState, useCallback } from 'react';
import DayPicker, { DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import { FiPower, FiClock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointments,
  Section,
  Appointment,
  Calendar,
} from './styles';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available) {
      setSelectedDate(day);
    }
  }, []);

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
      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>

          <NextAppointments>
            <strong>Atendimento a seguir</strong>

            <div>
              <img
                src="https://avatars3.githubusercontent.com/u/23387339?s=400&u=d9949402799d146cabc239beea101d3444aef2c8&v=4"
                alt="Michelli Brito"
              />

              <strong>Michelli Brito</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointments>

          <Section>
            <strong>Manhã</strong>

            <Appointment>
              <span>
                <FiClock />
                8:00
              </span>

              <div>
                <img
                  src="https://avatars3.githubusercontent.com/u/23387339?s=400&u=d9949402799d146cabc239beea101d3444aef2c8&v=4"
                  alt="Michelli Brito"
                />

                <strong>Michelli Brito</strong>
              </div>
            </Appointment>
            <Appointment>
              <span>
                <FiClock />
                8:00
              </span>

              <div>
                <img
                  src="https://avatars3.githubusercontent.com/u/23387339?s=400&u=d9949402799d146cabc239beea101d3444aef2c8&v=4"
                  alt="Michelli Brito"
                />

                <strong>Michelli Brito</strong>
              </div>
            </Appointment>
          </Section>
          <Section>
            <strong>Tarde</strong>

            <Appointment>
              <span>
                <FiClock />
                8:00
              </span>

              <div>
                <img
                  src="https://avatars3.githubusercontent.com/u/23387339?s=400&u=d9949402799d146cabc239beea101d3444aef2c8&v=4"
                  alt="Michelli Brito"
                />

                <strong>Michelli Brito</strong>
              </div>
            </Appointment>
            <Appointment>
              <span>
                <FiClock />
                8:00
              </span>

              <div>
                <img
                  src="https://avatars3.githubusercontent.com/u/23387339?s=400&u=d9949402799d146cabc239beea101d3444aef2c8&v=4"
                  alt="Michelli Brito"
                />

                <strong>Michelli Brito</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>
        <Calendar>
          <DayPicker
            weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
            fromMonth={new Date()}
            disabledDays={[{ daysOfWeek: [0, 6] }]}
            modifiers={{
              available: { daysOfWeek: [1, 2, 3, 4, 5] },
            }}
            selectedDays={selectedDate}
            onDayClick={handleDateChange}
            months={[
              'Janeiro',
              'Fevereiro',
              'Março',
              'Abril',
              'Maio',
              'Junho',
              'Julho',
              'Agosto',
              'Setembro',
              'Outubro',
              'Novembro',
              'Dezembro',
            ]}
          />
        </Calendar>
      </Content>
    </Container>
  );
};

export default Dashboard;
