import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PowerTransformerScalarWhereInput {

    @Field(() => [PowerTransformerScalarWhereInput], {nullable:true})
    AND?: Array<PowerTransformerScalarWhereInput>;

    @Field(() => [PowerTransformerScalarWhereInput], {nullable:true})
    OR?: Array<PowerTransformerScalarWhereInput>;

    @Field(() => [PowerTransformerScalarWhereInput], {nullable:true})
    NOT?: Array<PowerTransformerScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    capacityKVA?: FloatNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    stationId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
