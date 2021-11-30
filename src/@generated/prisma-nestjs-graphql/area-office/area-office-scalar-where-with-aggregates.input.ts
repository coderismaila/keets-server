import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class AreaOfficeScalarWhereWithAggregatesInput {

    @Field(() => [AreaOfficeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AreaOfficeScalarWhereWithAggregatesInput>;

    @Field(() => [AreaOfficeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AreaOfficeScalarWhereWithAggregatesInput>;

    @Field(() => [AreaOfficeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AreaOfficeScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    nercCode?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    kaedcoCode?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
