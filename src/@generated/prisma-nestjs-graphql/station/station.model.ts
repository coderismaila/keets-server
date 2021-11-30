import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { StationType } from '../prisma/station-type.enum';
import { AreaOffice } from '../area-office/area-office.model';
import { PowerTransformer } from '../power-transformer/power-transformer.model';
import { StationCount } from './station-count.output';

@ObjectType()
export class Station {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Float, {nullable:true})
    latitude!: number | null;

    @Field(() => Float, {nullable:true})
    longitude!: number | null;

    @Field(() => StationType, {nullable:false})
    stationType!: keyof typeof StationType;

    @Field(() => String, {nullable:true})
    nercCode!: string | null;

    @Field(() => String, {nullable:true})
    kaedcoCode!: string | null;

    @Field(() => String, {nullable:true})
    areaOfficeId!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => AreaOffice, {nullable:true})
    areaOffice?: AreaOffice | null;

    @Field(() => [PowerTransformer], {nullable:true})
    powerTransformer?: Array<PowerTransformer>;

    @Field(() => StationCount, {nullable:true})
    _count?: StationCount | null;
}
