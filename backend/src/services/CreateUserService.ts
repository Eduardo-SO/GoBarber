import { getCustomRepository } from 'typeorm';

import User from '../entities/User';
import UserRepository from '../repositories/UsersRepository';

interface RequestDTO {
  name: string;
  email: string;
  password: string;
}

class CreateAppointmentService {
  public async execute({ name, email, password }: RequestDTO): Promise<User> {
    const userRepository = getCustomRepository(UserRepository);

    const findUserWithSameEmail = await userRepository.findByEmail(email);

    if (findUserWithSameEmail) {
      throw Error('This email already exists');
    }

    const user = userRepository.create({
      name,
      email,
      password,
    });

    await userRepository.save(user);

    return user;
  }
}

export default CreateAppointmentService;
