import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByRelationAggregateInput } from '../user/user-order-by-relation-aggregate.input';
import { StationOrderByRelationAggregateInput } from '../station/station-order-by-relation-aggregate.input';

@InputType()
export class AreaOfficeOrderByWithRelationInput {

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

    @Field(() => UserOrderByRelationAggregateInput, {nullable:true})
    user?: UserOrderByRelationAggregateInput;

    @Field(() => StationOrderByRelationAggregateInput, {nullable:true})
    station?: StationOrderByRelationAggregateInput;
}
