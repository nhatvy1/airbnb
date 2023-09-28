import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entities/User";
import { UserDetails } from "src/utils/userDetail";
import { Repository } from "typeorm";

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ){ }

    async validateUser(details: UserDetails) {
        console.log('Check details: ', details)
        const user = await this.userRepository.findOneBy({ email: details.email });
        if (user) {
            return user;
        }
        const newUser = this.userRepository.create(details);
        return this.userRepository.save(newUser)
    }

    async findUser(id: number) {
        const user = await this.userRepository.findOneBy({ id })
        return user
    }
}