import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PowerTransformerWhereUniqueInput } from './power-transformer-where-unique.input';
import { PowerTransformerUpdateWithoutStationInput } from './power-transformer-update-without-station.input';

@InputType()
export class PowerTransformerUpdateWithWhereUniqueWithoutStationInput {

    @Field(() => PowerTransformerWhereUniqueInput, {nullable:false})
    where!: PowerTransformerWhereUniqueInput;

    @Field(() => PowerTransformerUpdateWithoutStationInput, {nullable:false})
    data!: PowerTransformerUpdateWithoutStationInput;
}
