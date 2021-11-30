import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StationWhereInput } from './station-where.input';
import { StationOrderByWithRelationInput } from './station-order-by-with-relation.input';
import { StationWhereUniqueInput } from './station-where-unique.input';
import { Int } from '@nestjs/graphql';
import { StationCountAggregateInput } from './station-count-aggregate.input';
import { StationAvgAggregateInput } from './station-avg-aggregate.input';
import { StationSumAggregateInput } from './station-sum-aggregate.input';
import { StationMinAggregateInput } from './station-min-aggregate.input';
import { StationMaxAggregateInput } from './station-max-aggregate.input';

@ArgsType()
export class StationAggregateArgs {

    @Field(() => StationWhereInput, {nullable:true})
    where?: StationWhereInput;

    @Field(() => [StationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StationOrderByWithRelationInput>;

    @Field(() => StationWhereUniqueInput, {nullable:true})
    cursor?: StationWhereUniqueInput;

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
