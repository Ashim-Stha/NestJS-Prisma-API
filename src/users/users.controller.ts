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

//controllers responsible for handling incoming requests and returning responses to the client
@Controller('users') // handles /users route
export class UsersController {
  //based on waterfall model - order matters

  @Get() // GET /users or /users?role=value
  findAll(@Query('role') role?: 'ADMIN' | 'ENGINEER' | 'INTERN') {
    return [];
  }

  //   @Get('interns') // GET /users/interns
  //   findAllInterns() {
  //     return [];
  //   }

  @Get(':id') // GET /users/:id
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post() // POST /users
  create(@Body() user: {}) {
    return user;
  }

  @Patch(':id') // PATCH /users/:id
  update(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate };
  }

  @Delete(':id') // DELETE /users/:id
  delete(@Param('id') id: string) {
    return { id };
  }
}
