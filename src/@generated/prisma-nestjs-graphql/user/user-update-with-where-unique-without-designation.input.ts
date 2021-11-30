import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutDesignationInput } from './user-update-without-designation.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutDesignationInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutDesignationInput, {nullable:false})
    data!: UserUpdateWithoutDesignationInput;
}
