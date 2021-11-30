import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DesignationCountOrderByAggregateInput } from './designation-count-order-by-aggregate.input';
import { DesignationMaxOrderByAggregateInput } from './designation-max-order-by-aggregate.input';
import { DesignationMinOrderByAggregateInput } from './designation-min-order-by-aggregate.input';

@InputType()
export class DesignationOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => DesignationCountOrderByAggregateInput, {nullable:true})
    _count?: DesignationCountOrderByAggregateInput;

    @Field(() => DesignationMaxOrderByAggregateInput, {nullable:true})
    _max?: DesignationMaxOrderByAggregateInput;

    @Field(() => DesignationMinOrderByAggregateInput, {nullable:true})
    _min?: DesignationMinOrderByAggregateInput;
}
