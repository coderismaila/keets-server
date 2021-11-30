import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Role } from '../prisma/role.enum';
import { AreaOfficeCreateNestedOneWithoutUserInput } from '../area-office/area-office-create-nested-one-without-user.input';
import { DesignationCreateNestedOneWithoutUserInput } from '../designation/designation-create-nested-one-without-user.input';

@InputType()
export class UserCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    username!: string;

    @Field(() => String, {nullable:false})
    staffId!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;

    @Field(() => String, {nullable:true})
    firstName?: string;

    @Field(() => String, {nullable:true})
    lastName?: string;

    @Field(() => String, {nullable:true})
    middleName?: string;

    @Field(() => String, {nullable:true})
    phoneNumber?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => AreaOfficeCreateNestedOneWithoutUserInput, {nullable:true})
    areaOffice?: AreaOfficeCreateNestedOneWithoutUserInput;

    @Field(() => DesignationCreateNestedOneWithoutUserInput, {nullable:true})
    designation?: DesignationCreateNestedOneWithoutUserInput;
}
