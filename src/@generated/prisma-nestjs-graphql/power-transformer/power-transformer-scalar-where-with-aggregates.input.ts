import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { FloatNullableWithAggregatesFilter } from '../prisma/float-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class PowerTransformerScalarWhereWithAggregatesInput {

    @Field(() => [PowerTransformerScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PowerTransformerScalarWhereWithAggregatesInput>;

    @Field(() => [PowerTransformerScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PowerTransformerScalarWhereWithAggregatesInput>;

    @Field(() => [PowerTransformerScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PowerTransformerScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    capacityKVA?: FloatNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    stationId?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
