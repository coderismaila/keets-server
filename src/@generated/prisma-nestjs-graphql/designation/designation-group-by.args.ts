import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DesignationWhereInput } from './designation-where.input';
import { DesignationOrderByWithAggregationInput } from './designation-order-by-with-aggregation.input';
import { DesignationScalarFieldEnum } from './designation-scalar-field.enum';
import { DesignationScalarWhereWithAggregatesInput } from './designation-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DesignationCountAggregateInput } from './designation-count-aggregate.input';
import { DesignationMinAggregateInput } from './designation-min-aggregate.input';
import { DesignationMaxAggregateInput } from './designation-max-aggregate.input';

@ArgsType()
export class DesignationGroupByArgs {

    @Field(() => DesignationWhereInput, {nullable:true})
    where?: DesignationWhereInput;

    @Field(() => [DesignationOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DesignationOrderByWithAggregationInput>;

    @Field(() => [DesignationScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DesignationScalarFieldEnum>;

    @Field(() => DesignationScalarWhereWithAggregatesInput, {nullable:true})
    having?: DesignationScalarWhereWithAggregatesInput;

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
