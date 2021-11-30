import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';
import { StationListRelationFilter } from '../station/station-list-relation-filter.input';

@InputType()
export class AreaOfficeWhereInput {

    @Field(() => [AreaOfficeWhereInput], {nullable:true})
    AND?: Array<AreaOfficeWhereInput>;

    @Field(() => [AreaOfficeWhereInput], {nullable:true})
    OR?: Array<AreaOfficeWhereInput>;

    @Field(() => [AreaOfficeWhereInput], {nullable:true})
    NOT?: Array<AreaOfficeWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    nercCode?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    kaedcoCode?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    user?: UserListRelationFilter;

    @Field(() => StationListRelationFilter, {nullable:true})
    station?: StationListRelationFilter;
}
