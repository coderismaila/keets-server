import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { EnumStationTypeFilter } from '../prisma/enum-station-type-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { AreaOfficeRelationFilter } from '../area-office/area-office-relation-filter.input';
import { PowerTransformerListRelationFilter } from '../power-transformer/power-transformer-list-relation-filter.input';

@InputType()
export class StationWhereInput {

    @Field(() => [StationWhereInput], {nullable:true})
    AND?: Array<StationWhereInput>;

    @Field(() => [StationWhereInput], {nullable:true})
    OR?: Array<StationWhereInput>;

    @Field(() => [StationWhereInput], {nullable:true})
    NOT?: Array<StationWhereInput>;

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

    @Field(() => AreaOfficeRelationFilter, {nullable:true})
    areaOffice?: AreaOfficeRelationFilter;

    @Field(() => PowerTransformerListRelationFilter, {nullable:true})
    powerTransformer?: PowerTransformerListRelationFilter;
}
