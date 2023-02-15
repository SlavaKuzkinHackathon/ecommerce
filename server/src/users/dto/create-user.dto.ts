import { ApiProperty } from "@nestjs/swagger"

export class CreateUserDto {

    @ApiProperty({example: 'user@mail.ru', description: 'email подьзователя'})
    readonly email: string

    @ApiProperty({example: 'password', description: 'пароль пользователя'})
    readonly password: string
}