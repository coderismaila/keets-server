import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class PowerTransformerAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    capacityKVA?: keyof typeof SortOrder;
}
