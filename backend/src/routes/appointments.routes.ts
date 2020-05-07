import { Router } from 'express';

import { parseISO, startOfHour } from 'date-fns';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();

appointmentsRouter.get('/', (request, response) => {
  const appointments = appointmentsRepository.all();

  return response.json(appointments);
});

appointmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body;

  const formattedDate = startOfHour(parseISO(date));

  const findAppointmentInSameDate = appointmentsRepository.findByDate(
    formattedDate,
  );

  if (findAppointmentInSameDate) {
    return response
      .status(400)
      .json({ error: 'This appointment is already booked' });
  }

  const appointment = appointmentsRepository.create({
    provider,
    date: formattedDate,
  });

  return response.json(appointment);
});

export default appointmentsRouter;
