import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AreaOfficeCountOrderByAggregateInput } from './area-office-count-order-by-aggregate.input';
import { AreaOfficeMaxOrderByAggregateInput } from './area-office-max-order-by-aggregate.input';
import { AreaOfficeMinOrderByAggregateInput } from './area-office-min-order-by-aggregate.input';

@InputType()
export class AreaOfficeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    nercCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    kaedcoCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => AreaOfficeCountOrderByAggregateInput, {nullable:true})
    _count?: AreaOfficeCountOrderByAggregateInput;

    @Field(() => AreaOfficeMaxOrderByAggregateInput, {nullable:true})
    _max?: AreaOfficeMaxOrderByAggregateInput;

    @Field(() => AreaOfficeMinOrderByAggregateInput, {nullable:true})
    _min?: AreaOfficeMinOrderByAggregateInput;
}
