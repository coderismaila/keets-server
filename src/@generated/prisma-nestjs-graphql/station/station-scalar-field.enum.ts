import { registerEnumType } from '@nestjs/graphql';

export enum StationScalarFieldEnum {
    id = "id",
    name = "name",
    latitude = "latitude",
    longitude = "longitude",
    stationType = "stationType",
    nercCode = "nercCode",
    kaedcoCode = "kaedcoCode",
    areaOfficeId = "areaOfficeId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(StationScalarFieldEnum, { name: 'StationScalarFieldEnum', description: undefined })
