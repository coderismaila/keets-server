import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutDesignationInput } from './user-update-without-designation.input';
import { UserCreateWithoutDesignationInput } from './user-create-without-designation.input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutDesignationInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutDesignationInput, {nullable:false})
    update!: UserUpdateWithoutDesignationInput;

    @Field(() => UserCreateWithoutDesignationInput, {nullable:false})
    create!: UserCreateWithoutDesignationInput;
}
