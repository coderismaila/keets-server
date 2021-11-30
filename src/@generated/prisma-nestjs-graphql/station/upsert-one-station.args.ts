import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StationWhereUniqueInput } from './station-where-unique.input';
import { StationCreateInput } from './station-create.input';
import { StationUpdateInput } from './station-update.input';

@ArgsType()
export class UpsertOneStationArgs {

    @Field(() => StationWhereUniqueInput, {nullable:false})
    where!: StationWhereUniqueInput;

    @Field(() => StationCreateInput, {nullable:false})
    create!: StationCreateInput;

    @Field(() => StationUpdateInput, {nullable:false})
    update!: StationUpdateInput;
}
