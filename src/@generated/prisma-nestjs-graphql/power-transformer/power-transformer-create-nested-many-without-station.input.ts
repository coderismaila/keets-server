import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PowerTransformerCreateWithoutStationInput } from './power-transformer-create-without-station.input';
import { PowerTransformerCreateOrConnectWithoutStationInput } from './power-transformer-create-or-connect-without-station.input';
import { PowerTransformerCreateManyStationInputEnvelope } from './power-transformer-create-many-station-input-envelope.input';
import { PowerTransformerWhereUniqueInput } from './power-transformer-where-unique.input';

@InputType()
export class PowerTransformerCreateNestedManyWithoutStationInput {

    @Field(() => [PowerTransformerCreateWithoutStationInput], {nullable:true})
    create?: Array<PowerTransformerCreateWithoutStationInput>;

    @Field(() => [PowerTransformerCreateOrConnectWithoutStationInput], {nullable:true})
    connectOrCreate?: Array<PowerTransformerCreateOrConnectWithoutStationInput>;

    @Field(() => PowerTransformerCreateManyStationInputEnvelope, {nullable:true})
    createMany?: PowerTransformerCreateManyStationInputEnvelope;

    @Field(() => [PowerTransformerWhereUniqueInput], {nullable:true})
    connect?: Array<PowerTransformerWhereUniqueInput>;
}
