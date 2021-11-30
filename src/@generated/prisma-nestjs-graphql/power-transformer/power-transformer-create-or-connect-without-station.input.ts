import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PowerTransformerWhereUniqueInput } from './power-transformer-where-unique.input';
import { PowerTransformerCreateWithoutStationInput } from './power-transformer-create-without-station.input';

@InputType()
export class PowerTransformerCreateOrConnectWithoutStationInput {

    @Field(() => PowerTransformerWhereUniqueInput, {nullable:false})
    where!: PowerTransformerWhereUniqueInput;

    @Field(() => PowerTransformerCreateWithoutStationInput, {nullable:false})
    create!: PowerTransformerCreateWithoutStationInput;
}
