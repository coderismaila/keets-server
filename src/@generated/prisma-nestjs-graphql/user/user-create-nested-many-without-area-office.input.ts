import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAreaOfficeInput } from './user-create-without-area-office.input';
import { UserCreateOrConnectWithoutAreaOfficeInput } from './user-create-or-connect-without-area-office.input';
import { UserCreateManyAreaOfficeInputEnvelope } from './user-create-many-area-office-input-envelope.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedManyWithoutAreaOfficeInput {

    @Field(() => [UserCreateWithoutAreaOfficeInput], {nullable:true})
    create?: Array<UserCreateWithoutAreaOfficeInput>;

    @Field(() => [UserCreateOrConnectWithoutAreaOfficeInput], {nullable:true})
    connectOrCreate?: Array<UserCreateOrConnectWithoutAreaOfficeInput>;

    @Field(() => UserCreateManyAreaOfficeInputEnvelope, {nullable:true})
    createMany?: UserCreateManyAreaOfficeInputEnvelope;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    connect?: Array<UserWhereUniqueInput>;
}
