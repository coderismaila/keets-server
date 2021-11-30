import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StationWhereInput } from './station-where.input';

@ArgsType()
export class DeleteManyStationArgs {

    @Field(() => StationWhereInput, {nullable:true})
    where?: StationWhereInput;
}
