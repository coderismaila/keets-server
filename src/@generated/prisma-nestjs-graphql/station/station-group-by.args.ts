import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StationWhereInput } from './station-where.input';
import { StationOrderByWithAggregationInput } from './station-order-by-with-aggregation.input';
import { StationScalarFieldEnum } from './station-scalar-field.enum';
import { StationScalarWhereWithAggregatesInput } from './station-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { StationCountAggregateInput } from './station-count-aggregate.input';
import { StationAvgAggregateInput } from './station-avg-aggregate.input';
import { StationSumAggregateInput } from './station-sum-aggregate.input';
import { StationMinAggregateInput } from './station-min-aggregate.input';
import { StationMaxAggregateInput } from './station-max-aggregate.input';

@ArgsType()
export class StationGroupByArgs {

    @Field(() => StationWhereInput, {nullable:true})
    where?: StationWhereInput;

    @Field(() => [StationOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<StationOrderByWithAggregationInput>;

    @Field(() => [StationScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof StationScalarFieldEnum>;

    @Field(() => StationScalarWhereWithAggregatesInput, {nullable:true})
    having?: StationScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => StationCountAggregateInput, {nullable:true})
    _count?: StationCountAggregateInput;

    @Field(() => StationAvgAggregateInput, {nullable:true})
    _avg?: StationAvgAggregateInput;

    @Field(() => StationSumAggregateInput, {nullable:true})
    _sum?: StationSumAggregateInput;

    @Field(() => StationMinAggregateInput, {nullable:true})
    _min?: StationMinAggregateInput;

    @Field(() => StationMaxAggregateInput, {nullable:true})
    _max?: StationMaxAggregateInput;
}
