import { registerEnumType } from '@nestjs/graphql';

export enum DesignationScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description"
}


registerEnumType(DesignationScalarFieldEnum, { name: 'DesignationScalarFieldEnum', description: undefined })
