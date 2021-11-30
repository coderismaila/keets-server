import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutDesignationInput } from './user-create-without-designation.input';

@InputType()
export class UserCreateOrConnectWithoutDesignationInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutDesignationInput, {nullable:false})
    create!: UserCreateWithoutDesignationInput;
}
