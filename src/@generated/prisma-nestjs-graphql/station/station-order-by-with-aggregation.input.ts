import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { StationCountOrderByAggregateInput } from './station-count-order-by-aggregate.input';
import { StationAvgOrderByAggregateInput } from './station-avg-order-by-aggregate.input';
import { StationMaxOrderByAggregateInput } from './station-max-order-by-aggregate.input';
import { StationMinOrderByAggregateInput } from './station-min-order-by-aggregate.input';
import { StationSumOrderByAggregateInput } from './station-sum-order-by-aggregate.input';

@InputType()
export class StationOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    latitude?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    longitude?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    stationType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    nercCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    kaedcoCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    areaOfficeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => StationCountOrderByAggregateInput, {nullable:true})
    _count?: StationCountOrderByAggregateInput;

    @Field(() => StationAvgOrderByAggregateInput, {nullable:true})
    _avg?: StationAvgOrderByAggregateInput;

    @Field(() => StationMaxOrderByAggregateInput, {nullable:true})
    _max?: StationMaxOrderByAggregateInput;

    @Field(() => StationMinOrderByAggregateInput, {nullable:true})
    _min?: StationMinOrderByAggregateInput;

    @Field(() => StationSumOrderByAggregateInput, {nullable:true})
    _sum?: StationSumOrderByAggregateInput;
}
