import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StationWhereInput } from './station-where.input';

@InputType()
export class StationRelationFilter {

    @Field(() => StationWhereInput, {nullable:true})
    is?: StationWhereInput;

    @Field(() => StationWhereInput, {nullable:true})
    isNot?: StationWhereInput;
}
