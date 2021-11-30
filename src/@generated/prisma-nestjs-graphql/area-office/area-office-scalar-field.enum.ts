import { registerEnumType } from '@nestjs/graphql';

export enum AreaOfficeScalarFieldEnum {
    id = "id",
    name = "name",
    nercCode = "nercCode",
    kaedcoCode = "kaedcoCode",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(AreaOfficeScalarFieldEnum, { name: 'AreaOfficeScalarFieldEnum', description: undefined })
