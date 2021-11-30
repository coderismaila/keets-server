import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PowerTransformerWhereInput } from './power-transformer-where.input';

@InputType()
export class PowerTransformerListRelationFilter {

    @Field(() => PowerTransformerWhereInput, {nullable:true})
    every?: PowerTransformerWhereInput;

    @Field(() => PowerTransformerWhereInput, {nullable:true})
    some?: PowerTransformerWhereInput;

    @Field(() => PowerTransformerWhereInput, {nullable:true})
    none?: PowerTransformerWhereInput;
}
