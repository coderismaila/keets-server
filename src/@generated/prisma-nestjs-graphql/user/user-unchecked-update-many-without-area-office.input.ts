import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAreaOfficeInput } from './user-create-without-area-office.input';
import { UserCreateOrConnectWithoutAreaOfficeInput } from './user-create-or-connect-without-area-office.input';
import { UserUpsertWithWhereUniqueWithoutAreaOfficeInput } from './user-upsert-with-where-unique-without-area-office.input';
import { UserCreateManyAreaOfficeInputEnvelope } from './user-create-many-area-office-input-envelope.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutAreaOfficeInput } from './user-update-with-where-unique-without-area-office.input';
import { UserUpdateManyWithWhereWithoutAreaOfficeInput } from './user-update-many-with-where-without-area-office.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUncheckedUpdateManyWithoutAreaOfficeInput {

    @Field(() => [UserCreateWithoutAreaOfficeInput], {nullable:true})
    create?: Array<UserCreateWithoutAreaOfficeInput>;

    @Field(() => [UserCreateOrConnectWithoutAreaOfficeInput], {nullable:true})
    connectOrCreate?: Array<UserCreateOrConnectWithoutAreaOfficeInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutAreaOfficeInput], {nullable:true})
    upsert?: Array<UserUpsertWithWhereUniqueWithoutAreaOfficeInput>;

    @Field(() => UserCreateManyAreaOfficeInputEnvelope, {nullable:true})
    createMany?: UserCreateManyAreaOfficeInputEnvelope;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    connect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    set?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    disconnect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    delete?: Array<UserWhereUniqueInput>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutAreaOfficeInput], {nullable:true})
    update?: Array<UserUpdateWithWhereUniqueWithoutAreaOfficeInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutAreaOfficeInput], {nullable:true})
    updateMany?: Array<UserUpdateManyWithWhereWithoutAreaOfficeInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    deleteMany?: Array<UserScalarWhereInput>;
}
