import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DesignationWhereInput } from './designation-where.input';
import { DesignationOrderByWithRelationInput } from './designation-order-by-with-relation.input';
import { DesignationWhereUniqueInput } from './designation-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DesignationCountAggregateInput } from './designation-count-aggregate.input';
import { DesignationMinAggregateInput } from './designation-min-aggregate.input';
import { DesignationMaxAggregateInput } from './designation-max-aggregate.input';

@ArgsType()
export class DesignationAggregateArgs {

    @Field(() => DesignationWhereInput, {nullable:true})
    where?: DesignationWhereInput;

    @Field(() => [DesignationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DesignationOrderByWithRelationInput>;

    @Field(() => DesignationWhereUniqueInput, {nullable:true})
    cursor?: DesignationWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DesignationCountAggregateInput, {nullable:true})
    _count?: DesignationCountAggregateInput;

    @Field(() => DesignationMinAggregateInput, {nullable:true})
    _min?: DesignationMinAggregateInput;

    @Field(() => DesignationMaxAggregateInput, {nullable:true})
    _max?: DesignationMaxAggregateInput;
}
