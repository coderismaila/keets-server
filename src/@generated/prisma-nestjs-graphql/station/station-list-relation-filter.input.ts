import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StationWhereInput } from './station-where.input';

@InputType()
export class StationListRelationFilter {

    @Field(() => StationWhereInput, {nullable:true})
    every?: StationWhereInput;

    @Field(() => StationWhereInput, {nullable:true})
    some?: StationWhereInput;

    @Field(() => StationWhereInput, {nullable:true})
    none?: StationWhereInput;
}
