import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PowerTransformerWhereInput } from './power-transformer-where.input';
import { PowerTransformerOrderByWithRelationInput } from './power-transformer-order-by-with-relation.input';
import { PowerTransformerWhereUniqueInput } from './power-transformer-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PowerTransformerScalarFieldEnum } from './power-transformer-scalar-field.enum';

@ArgsType()
export class FindManyPowerTransformerArgs {

    @Field(() => PowerTransformerWhereInput, {nullable:true})
    where?: PowerTransformerWhereInput;

    @Field(() => [PowerTransformerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PowerTransformerOrderByWithRelationInput>;

    @Field(() => PowerTransformerWhereUniqueInput, {nullable:true})
    cursor?: PowerTransformerWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PowerTransformerScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PowerTransformerScalarFieldEnum>;
}
