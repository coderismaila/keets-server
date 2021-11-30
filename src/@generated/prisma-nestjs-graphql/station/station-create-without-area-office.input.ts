import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { StationType } from '../prisma/station-type.enum';
import { PowerTransformerCreateNestedManyWithoutStationInput } from '../power-transformer/power-transformer-create-nested-many-without-station.input';

@InputType()
export class StationCreateWithoutAreaOfficeInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Float, {nullable:true})
    latitude?: number;

    @Field(() => Float, {nullable:true})
    longitude?: number;

    @Field(() => StationType, {nullable:false})
    stationType!: keyof typeof StationType;

    @Field(() => String, {nullable:true})
    nercCode?: string;

    @Field(() => String, {nullable:true})
    kaedcoCode?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => PowerTransformerCreateNestedManyWithoutStationInput, {nullable:true})
    powerTransformer?: PowerTransformerCreateNestedManyWithoutStationInput;
}
