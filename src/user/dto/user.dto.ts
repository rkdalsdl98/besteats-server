import { IsString, IsObject, IsDefined } from "class-validator"
import { Birth, Profile } from "../entities/info.entity"

export class UserDto {
    @IsString()
    @IsDefined()
    id: string

    @IsString()
    @IsDefined()
    pass: string

    @IsString()
    @IsDefined()
    readonly uuid: string

    @IsString()
    name: string

    @IsObject()
    birth?: Birth

    @IsObject()
    profile?: Profile
}

export class AuthorDto {
    @IsString()
    readonly uuid: string

    @IsString()
    id: string

    @IsString()
    pass?: string 
}