import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutAreaOfficeInput } from './user-update-without-area-office.input';
import { UserCreateWithoutAreaOfficeInput } from './user-create-without-area-office.input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutAreaOfficeInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutAreaOfficeInput, {nullable:false})
    update!: UserUpdateWithoutAreaOfficeInput;

    @Field(() => UserCreateWithoutAreaOfficeInput, {nullable:false})
    create!: UserCreateWithoutAreaOfficeInput;
}
