import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StationUpdateInput } from './station-update.input';
import { StationWhereUniqueInput } from './station-where-unique.input';

@ArgsType()
export class UpdateOneStationArgs {

    @Field(() => StationUpdateInput, {nullable:false})
    data!: StationUpdateInput;

    @Field(() => StationWhereUniqueInput, {nullable:false})
    where!: StationWhereUniqueInput;
}
