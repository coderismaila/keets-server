import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { StationOrderByWithRelationInput } from '../station/station-order-by-with-relation.input';

@InputType()
export class PowerTransformerOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    capacityKVA?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    stationId?: keyof typeof SortOrder;

    @Field(() => StationOrderByWithRelationInput, {nullable:true})
    station?: StationOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
