import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StationWhereUniqueInput } from './station-where-unique.input';

@ArgsType()
export class FindUniqueStationArgs {

    @Field(() => StationWhereUniqueInput, {nullable:false})
    where!: StationWhereUniqueInput;
}
