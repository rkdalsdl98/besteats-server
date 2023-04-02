import { Controller, Post, Patch, Body, Delete, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto, AuthorDto } from './dto/user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('/login')
    login(@Body() userAuthor: AuthorDto): void {

    }

    @Post('/register')
    registerId(@Body() user: UserDto): void {

    }

    @Delete('/delete')
    deleteId(@Body() userAuthor: AuthorDto): void {

    }

    @Patch('/retouch')
    retouchProfile(@Body() retouchData): void {

    }

    @Put('/update')
    updateUser(@Body() user: UserDto): void {

    }
}
