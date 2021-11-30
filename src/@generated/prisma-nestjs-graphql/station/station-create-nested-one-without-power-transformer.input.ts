import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StationCreateWithoutPowerTransformerInput } from './station-create-without-power-transformer.input';
import { StationCreateOrConnectWithoutPowerTransformerInput } from './station-create-or-connect-without-power-transformer.input';
import { StationWhereUniqueInput } from './station-where-unique.input';

@InputType()
export class StationCreateNestedOneWithoutPowerTransformerInput {

    @Field(() => StationCreateWithoutPowerTransformerInput, {nullable:true})
    create?: StationCreateWithoutPowerTransformerInput;

    @Field(() => StationCreateOrConnectWithoutPowerTransformerInput, {nullable:true})
    connectOrCreate?: StationCreateOrConnectWithoutPowerTransformerInput;

    @Field(() => StationWhereUniqueInput, {nullable:true})
    connect?: StationWhereUniqueInput;
}
