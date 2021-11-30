import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { StationType } from '../prisma/station-type.enum';

@ObjectType()
export class StationMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Float, {nullable:true})
    latitude?: number;

    @Field(() => Float, {nullable:true})
    longitude?: number;

    @Field(() => StationType, {nullable:true})
    stationType?: keyof typeof StationType;

    @Field(() => String, {nullable:true})
    nercCode?: string;

    @Field(() => String, {nullable:true})
    kaedcoCode?: string;

    @Field(() => String, {nullable:true})
    areaOfficeId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
