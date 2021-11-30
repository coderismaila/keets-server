import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { StationRelationFilter } from '../station/station-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PowerTransformerWhereInput {

    @Field(() => [PowerTransformerWhereInput], {nullable:true})
    AND?: Array<PowerTransformerWhereInput>;

    @Field(() => [PowerTransformerWhereInput], {nullable:true})
    OR?: Array<PowerTransformerWhereInput>;

    @Field(() => [PowerTransformerWhereInput], {nullable:true})
    NOT?: Array<PowerTransformerWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    capacityKVA?: FloatNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    stationId?: StringFilter;

    @Field(() => StationRelationFilter, {nullable:true})
    station?: StationRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
