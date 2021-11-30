import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PowerTransformerCountOrderByAggregateInput } from './power-transformer-count-order-by-aggregate.input';
import { PowerTransformerAvgOrderByAggregateInput } from './power-transformer-avg-order-by-aggregate.input';
import { PowerTransformerMaxOrderByAggregateInput } from './power-transformer-max-order-by-aggregate.input';
import { PowerTransformerMinOrderByAggregateInput } from './power-transformer-min-order-by-aggregate.input';
import { PowerTransformerSumOrderByAggregateInput } from './power-transformer-sum-order-by-aggregate.input';

@InputType()
export class PowerTransformerOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    capacityKVA?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    stationId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => PowerTransformerCountOrderByAggregateInput, {nullable:true})
    _count?: PowerTransformerCountOrderByAggregateInput;

    @Field(() => PowerTransformerAvgOrderByAggregateInput, {nullable:true})
    _avg?: PowerTransformerAvgOrderByAggregateInput;

    @Field(() => PowerTransformerMaxOrderByAggregateInput, {nullable:true})
    _max?: PowerTransformerMaxOrderByAggregateInput;

    @Field(() => PowerTransformerMinOrderByAggregateInput, {nullable:true})
    _min?: PowerTransformerMinOrderByAggregateInput;

    @Field(() => PowerTransformerSumOrderByAggregateInput, {nullable:true})
    _sum?: PowerTransformerSumOrderByAggregateInput;
}
