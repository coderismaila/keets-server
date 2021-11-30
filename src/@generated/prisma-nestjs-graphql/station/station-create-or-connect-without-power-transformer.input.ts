import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StationWhereUniqueInput } from './station-where-unique.input';
import { StationCreateWithoutPowerTransformerInput } from './station-create-without-power-transformer.input';

@InputType()
export class StationCreateOrConnectWithoutPowerTransformerInput {

    @Field(() => StationWhereUniqueInput, {nullable:false})
    where!: StationWhereUniqueInput;

    @Field(() => StationCreateWithoutPowerTransformerInput, {nullable:false})
    create!: StationCreateWithoutPowerTransformerInput;
}
