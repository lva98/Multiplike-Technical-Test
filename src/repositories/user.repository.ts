import { Injectable } from '@nestjs/common';
import UserEntity from 'src/entities/user.entity';
import * as bcrypt from 'bcrypt';
import Config from 'src/config';

@Injectable()
class UserRepository {
  private users: UserEntity[];

  public async create(user: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, Config.salt);
    this.users.push({
      user,
      password: hashedPassword,
    });
  }

  public async find(user: string): Promise<UserEntity | undefined> {
    return this.users.find((it) => it.user === user);
  }
}

export default UserRepository;
