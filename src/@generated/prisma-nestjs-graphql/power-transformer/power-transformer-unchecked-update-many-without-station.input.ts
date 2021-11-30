import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PowerTransformerCreateWithoutStationInput } from './power-transformer-create-without-station.input';
import { PowerTransformerCreateOrConnectWithoutStationInput } from './power-transformer-create-or-connect-without-station.input';
import { PowerTransformerUpsertWithWhereUniqueWithoutStationInput } from './power-transformer-upsert-with-where-unique-without-station.input';
import { PowerTransformerCreateManyStationInputEnvelope } from './power-transformer-create-many-station-input-envelope.input';
import { PowerTransformerWhereUniqueInput } from './power-transformer-where-unique.input';
import { PowerTransformerUpdateWithWhereUniqueWithoutStationInput } from './power-transformer-update-with-where-unique-without-station.input';
import { PowerTransformerUpdateManyWithWhereWithoutStationInput } from './power-transformer-update-many-with-where-without-station.input';
import { PowerTransformerScalarWhereInput } from './power-transformer-scalar-where.input';

@InputType()
export class PowerTransformerUncheckedUpdateManyWithoutStationInput {

    @Field(() => [PowerTransformerCreateWithoutStationInput], {nullable:true})
    create?: Array<PowerTransformerCreateWithoutStationInput>;

    @Field(() => [PowerTransformerCreateOrConnectWithoutStationInput], {nullable:true})
    connectOrCreate?: Array<PowerTransformerCreateOrConnectWithoutStationInput>;

    @Field(() => [PowerTransformerUpsertWithWhereUniqueWithoutStationInput], {nullable:true})
    upsert?: Array<PowerTransformerUpsertWithWhereUniqueWithoutStationInput>;

    @Field(() => PowerTransformerCreateManyStationInputEnvelope, {nullable:true})
    createMany?: PowerTransformerCreateManyStationInputEnvelope;

    @Field(() => [PowerTransformerWhereUniqueInput], {nullable:true})
    connect?: Array<PowerTransformerWhereUniqueInput>;

    @Field(() => [PowerTransformerWhereUniqueInput], {nullable:true})
    set?: Array<PowerTransformerWhereUniqueInput>;

    @Field(() => [PowerTransformerWhereUniqueInput], {nullable:true})
    disconnect?: Array<PowerTransformerWhereUniqueInput>;

    @Field(() => [PowerTransformerWhereUniqueInput], {nullable:true})
    delete?: Array<PowerTransformerWhereUniqueInput>;

    @Field(() => [PowerTransformerUpdateWithWhereUniqueWithoutStationInput], {nullable:true})
    update?: Array<PowerTransformerUpdateWithWhereUniqueWithoutStationInput>;

    @Field(() => [PowerTransformerUpdateManyWithWhereWithoutStationInput], {nullable:true})
    updateMany?: Array<PowerTransformerUpdateManyWithWhereWithoutStationInput>;

    @Field(() => [PowerTransformerScalarWhereInput], {nullable:true})
    deleteMany?: Array<PowerTransformerScalarWhereInput>;
}
