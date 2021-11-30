import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { StationCreateNestedOneWithoutPowerTransformerInput } from '../station/station-create-nested-one-without-power-transformer.input';

@InputType()
export class PowerTransformerCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Float, {nullable:true})
    capacityKVA?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => StationCreateNestedOneWithoutPowerTransformerInput, {nullable:false})
    station!: StationCreateNestedOneWithoutPowerTransformerInput;
}
