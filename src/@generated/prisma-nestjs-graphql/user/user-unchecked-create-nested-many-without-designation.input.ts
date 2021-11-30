import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutDesignationInput } from './user-create-without-designation.input';
import { UserCreateOrConnectWithoutDesignationInput } from './user-create-or-connect-without-designation.input';
import { UserCreateManyDesignationInputEnvelope } from './user-create-many-designation-input-envelope.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUncheckedCreateNestedManyWithoutDesignationInput {

    @Field(() => [UserCreateWithoutDesignationInput], {nullable:true})
    create?: Array<UserCreateWithoutDesignationInput>;

    @Field(() => [UserCreateOrConnectWithoutDesignationInput], {nullable:true})
    connectOrCreate?: Array<UserCreateOrConnectWithoutDesignationInput>;

    @Field(() => UserCreateManyDesignationInputEnvelope, {nullable:true})
    createMany?: UserCreateManyDesignationInputEnvelope;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    connect?: Array<UserWhereUniqueInput>;
}
