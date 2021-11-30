import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StationUpdateWithoutPowerTransformerInput } from './station-update-without-power-transformer.input';
import { StationCreateWithoutPowerTransformerInput } from './station-create-without-power-transformer.input';

@InputType()
export class StationUpsertWithoutPowerTransformerInput {

    @Field(() => StationUpdateWithoutPowerTransformerInput, {nullable:false})
    update!: StationUpdateWithoutPowerTransformerInput;

    @Field(() => StationCreateWithoutPowerTransformerInput, {nullable:false})
    create!: StationCreateWithoutPowerTransformerInput;
}
