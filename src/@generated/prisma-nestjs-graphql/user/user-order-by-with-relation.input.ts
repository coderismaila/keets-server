import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AreaOfficeOrderByWithRelationInput } from '../area-office/area-office-order-by-with-relation.input';
import { DesignationOrderByWithRelationInput } from '../designation/designation-order-by-with-relation.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    username?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    staffId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    firstName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    middleName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    designationId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    areaOfficeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phoneNumber?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => AreaOfficeOrderByWithRelationInput, {nullable:true})
    areaOffice?: AreaOfficeOrderByWithRelationInput;

    @Field(() => DesignationOrderByWithRelationInput, {nullable:true})
    designation?: DesignationOrderByWithRelationInput;
}
