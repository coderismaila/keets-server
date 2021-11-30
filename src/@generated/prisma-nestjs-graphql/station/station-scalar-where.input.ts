import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { EnumStationTypeFilter } from '../prisma/enum-station-type-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class StationScalarWhereInput {

    @Field(() => [StationScalarWhereInput], {nullable:true})
    AND?: Array<StationScalarWhereInput>;

    @Field(() => [StationScalarWhereInput], {nullable:true})
    OR?: Array<StationScalarWhereInput>;

    @Field(() => [StationScalarWhereInput], {nullable:true})
    NOT?: Array<StationScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    latitude?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    longitude?: FloatNullableFilter;

    @Field(() => EnumStationTypeFilter, {nullable:true})
    stationType?: EnumStationTypeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    nercCode?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    kaedcoCode?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    areaOfficeId?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
