import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StationCreateWithoutPowerTransformerInput } from './station-create-without-power-transformer.input';
import { StationCreateOrConnectWithoutPowerTransformerInput } from './station-create-or-connect-without-power-transformer.input';
import { StationUpsertWithoutPowerTransformerInput } from './station-upsert-without-power-transformer.input';
import { StationWhereUniqueInput } from './station-where-unique.input';
import { StationUpdateWithoutPowerTransformerInput } from './station-update-without-power-transformer.input';

@InputType()
export class StationUpdateOneRequiredWithoutPowerTransformerInput {

    @Field(() => StationCreateWithoutPowerTransformerInput, {nullable:true})
    create?: StationCreateWithoutPowerTransformerInput;

    @Field(() => StationCreateOrConnectWithoutPowerTransformerInput, {nullable:true})
    connectOrCreate?: StationCreateOrConnectWithoutPowerTransformerInput;

    @Field(() => StationUpsertWithoutPowerTransformerInput, {nullable:true})
    upsert?: StationUpsertWithoutPowerTransformerInput;

    @Field(() => StationWhereUniqueInput, {nullable:true})
    connect?: StationWhereUniqueInput;

    @Field(() => StationUpdateWithoutPowerTransformerInput, {nullable:true})
    update?: StationUpdateWithoutPowerTransformerInput;
}
