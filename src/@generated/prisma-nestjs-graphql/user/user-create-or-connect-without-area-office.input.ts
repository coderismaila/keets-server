import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutAreaOfficeInput } from './user-create-without-area-office.input';

@InputType()
export class UserCreateOrConnectWithoutAreaOfficeInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutAreaOfficeInput, {nullable:false})
    create!: UserCreateWithoutAreaOfficeInput;
}
