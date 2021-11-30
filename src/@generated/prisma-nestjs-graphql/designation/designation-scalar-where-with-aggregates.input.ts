import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class DesignationScalarWhereWithAggregatesInput {

    @Field(() => [DesignationScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DesignationScalarWhereWithAggregatesInput>;

    @Field(() => [DesignationScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DesignationScalarWhereWithAggregatesInput>;

    @Field(() => [DesignationScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DesignationScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;
}
