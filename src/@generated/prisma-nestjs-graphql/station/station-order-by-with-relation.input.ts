import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AreaOfficeOrderByWithRelationInput } from '../area-office/area-office-order-by-with-relation.input';
import { PowerTransformerOrderByRelationAggregateInput } from '../power-transformer/power-transformer-order-by-relation-aggregate.input';

@InputType()
export class StationOrderByWithRelationInput {

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

    @Field(() => AreaOfficeOrderByWithRelationInput, {nullable:true})
    areaOffice?: AreaOfficeOrderByWithRelationInput;

    @Field(() => PowerTransformerOrderByRelationAggregateInput, {nullable:true})
    powerTransformer?: PowerTransformerOrderByRelationAggregateInput;
}
