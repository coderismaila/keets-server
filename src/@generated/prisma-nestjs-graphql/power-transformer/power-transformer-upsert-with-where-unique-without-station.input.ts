import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PowerTransformerWhereUniqueInput } from './power-transformer-where-unique.input';
import { PowerTransformerUpdateWithoutStationInput } from './power-transformer-update-without-station.input';
import { PowerTransformerCreateWithoutStationInput } from './power-transformer-create-without-station.input';

@InputType()
export class PowerTransformerUpsertWithWhereUniqueWithoutStationInput {

    @Field(() => PowerTransformerWhereUniqueInput, {nullable:false})
    where!: PowerTransformerWhereUniqueInput;

    @Field(() => PowerTransformerUpdateWithoutStationInput, {nullable:false})
    update!: PowerTransformerUpdateWithoutStationInput;

    @Field(() => PowerTransformerCreateWithoutStationInput, {nullable:false})
    create!: PowerTransformerCreateWithoutStationInput;
}
