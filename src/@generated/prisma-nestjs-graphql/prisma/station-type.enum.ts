import { registerEnumType } from '@nestjs/graphql';

export enum StationType {
    Transmission = "Transmission",
    Distribution = "Distribution"
}


registerEnumType(StationType, { name: 'StationType', description: undefined })
