import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StationUpdateManyMutationInput } from './station-update-many-mutation.input';
import { StationWhereInput } from './station-where.input';

@ArgsType()
export class UpdateManyStationArgs {

    @Field(() => StationUpdateManyMutationInput, {nullable:false})
    data!: StationUpdateManyMutationInput;

    @Field(() => StationWhereInput, {nullable:true})
    where?: StationWhereInput;
}
