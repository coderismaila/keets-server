import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    email = "email",
    username = "username",
    staffId = "staffId",
    password = "password",
    role = "role",
    firstName = "firstName",
    lastName = "lastName",
    middleName = "middleName",
    designationId = "designationId",
    areaOfficeId = "areaOfficeId",
    phoneNumber = "phoneNumber",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
