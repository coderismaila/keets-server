import { registerEnumType } from '@nestjs/graphql';

export enum PowerTransformerScalarFieldEnum {
    id = "id",
    name = "name",
    capacityKVA = "capacityKVA",
    stationId = "stationId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(PowerTransformerScalarFieldEnum, { name: 'PowerTransformerScalarFieldEnum', description: undefined })
