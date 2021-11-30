import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';

@InputType()
export class DesignationWhereInput {

    @Field(() => [DesignationWhereInput], {nullable:true})
    AND?: Array<DesignationWhereInput>;

    @Field(() => [DesignationWhereInput], {nullable:true})
    OR?: Array<DesignationWhereInput>;

    @Field(() => [DesignationWhereInput], {nullable:true})
    NOT?: Array<DesignationWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    User?: UserListRelationFilter;
}
