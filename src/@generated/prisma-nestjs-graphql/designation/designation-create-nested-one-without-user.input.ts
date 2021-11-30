import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DesignationCreateWithoutUserInput } from './designation-create-without-user.input';
import { DesignationCreateOrConnectWithoutUserInput } from './designation-create-or-connect-without-user.input';
import { DesignationWhereUniqueInput } from './designation-where-unique.input';

@InputType()
export class DesignationCreateNestedOneWithoutUserInput {

    @Field(() => DesignationCreateWithoutUserInput, {nullable:true})
    create?: DesignationCreateWithoutUserInput;

    @Field(() => DesignationCreateOrConnectWithoutUserInput, {nullable:true})
    connectOrCreate?: DesignationCreateOrConnectWithoutUserInput;

    @Field(() => DesignationWhereUniqueInput, {nullable:true})
    connect?: DesignationWhereUniqueInput;
}
