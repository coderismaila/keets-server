import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutDesignationInput } from './user-create-without-designation.input';
import { UserCreateOrConnectWithoutDesignationInput } from './user-create-or-connect-without-designation.input';
import { UserUpsertWithWhereUniqueWithoutDesignationInput } from './user-upsert-with-where-unique-without-designation.input';
import { UserCreateManyDesignationInputEnvelope } from './user-create-many-designation-input-envelope.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutDesignationInput } from './user-update-with-where-unique-without-designation.input';
import { UserUpdateManyWithWhereWithoutDesignationInput } from './user-update-many-with-where-without-designation.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUpdateManyWithoutDesignationInput {

    @Field(() => [UserCreateWithoutDesignationInput], {nullable:true})
    create?: Array<UserCreateWithoutDesignationInput>;

    @Field(() => [UserCreateOrConnectWithoutDesignationInput], {nullable:true})
    connectOrCreate?: Array<UserCreateOrConnectWithoutDesignationInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutDesignationInput], {nullable:true})
    upsert?: Array<UserUpsertWithWhereUniqueWithoutDesignationInput>;

    @Field(() => UserCreateManyDesignationInputEnvelope, {nullable:true})
    createMany?: UserCreateManyDesignationInputEnvelope;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    connect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    set?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    disconnect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    delete?: Array<UserWhereUniqueInput>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutDesignationInput], {nullable:true})
    update?: Array<UserUpdateWithWhereUniqueWithoutDesignationInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutDesignationInput], {nullable:true})
    updateMany?: Array<UserUpdateManyWithWhereWithoutDesignationInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    deleteMany?: Array<UserScalarWhereInput>;
}
