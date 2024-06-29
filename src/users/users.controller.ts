import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

//controllers responsible for handling incoming requests and returning responses to the client
@Controller('users') // handles /users route
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  //based on waterfall model - order matters
  @Get() // GET /users or /users?role=value
  findAll(@Query('role') role?: 'ADMIN' | 'ENGINEER' | 'INTERN') {
    return this.usersService.findAll(role);
  }

  //   @Get('interns') // GET /users/interns
  //   findAllInterns() {
  //     return [];
  //   }

  @Get(':id') // GET /users/:id
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id); //unaryplus(+) converts string into int
  }

  @Post() // POST /users
  create(
    @Body()
    user: {
      name: string;
      email: string;
      role: 'ADMIN' | 'ENGINEER' | 'INTERN';
    },
  ) {
    return this.usersService.create(user);
  }

  @Patch(':id') // PATCH /users/:id
  update(
    @Param('id') id: string,
    @Body()
    userUpdate: {
      name?: string;
      email?: string;
      role?: 'ADMIN' | 'ENGINEER' | 'INTERN';
    },
  ) {
    return this.usersService.update(+id, userUpdate);
  }

  @Delete(':id') // DELETE /users/:id
  delete(@Param('id') id: string) {
    return this.usersService.delete(+id);
  }
}
