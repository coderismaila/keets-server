import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DesignationWhereUniqueInput } from './designation-where-unique.input';
import { DesignationCreateWithoutUserInput } from './designation-create-without-user.input';

@InputType()
export class DesignationCreateOrConnectWithoutUserInput {

    @Field(() => DesignationWhereUniqueInput, {nullable:false})
    where!: DesignationWhereUniqueInput;

    @Field(() => DesignationCreateWithoutUserInput, {nullable:false})
    create!: DesignationCreateWithoutUserInput;
}
