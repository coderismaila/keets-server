import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AreaOfficeWhereInput } from './area-office-where.input';
import { AreaOfficeOrderByWithAggregationInput } from './area-office-order-by-with-aggregation.input';
import { AreaOfficeScalarFieldEnum } from './area-office-scalar-field.enum';
import { AreaOfficeScalarWhereWithAggregatesInput } from './area-office-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AreaOfficeCountAggregateInput } from './area-office-count-aggregate.input';
import { AreaOfficeMinAggregateInput } from './area-office-min-aggregate.input';
import { AreaOfficeMaxAggregateInput } from './area-office-max-aggregate.input';

@ArgsType()
export class AreaOfficeGroupByArgs {

    @Field(() => AreaOfficeWhereInput, {nullable:true})
    where?: AreaOfficeWhereInput;

    @Field(() => [AreaOfficeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AreaOfficeOrderByWithAggregationInput>;

    @Field(() => [AreaOfficeScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AreaOfficeScalarFieldEnum>;

    @Field(() => AreaOfficeScalarWhereWithAggregatesInput, {nullable:true})
    having?: AreaOfficeScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AreaOfficeCountAggregateInput, {nullable:true})
    _count?: AreaOfficeCountAggregateInput;

    @Field(() => AreaOfficeMinAggregateInput, {nullable:true})
    _min?: AreaOfficeMinAggregateInput;

    @Field(() => AreaOfficeMaxAggregateInput, {nullable:true})
    _max?: AreaOfficeMaxAggregateInput;
}
