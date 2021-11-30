import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutAreaOfficeInput } from './user-update-without-area-office.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutAreaOfficeInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutAreaOfficeInput, {nullable:false})
    data!: UserUpdateWithoutAreaOfficeInput;
}
