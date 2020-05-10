import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import AppError from '../errors/AppError';

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
      throw new AppError('This email already exists');
    }

    const hashedPassword = await hash(password, 8);

    const user = userRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    await userRepository.save(user);

    return user;
  }
}

export default CreateAppointmentService;
