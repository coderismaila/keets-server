import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DesignationCreateWithoutUserInput } from './designation-create-without-user.input';
import { DesignationCreateOrConnectWithoutUserInput } from './designation-create-or-connect-without-user.input';
import { DesignationUpsertWithoutUserInput } from './designation-upsert-without-user.input';
import { DesignationWhereUniqueInput } from './designation-where-unique.input';
import { DesignationUpdateWithoutUserInput } from './designation-update-without-user.input';

@InputType()
export class DesignationUpdateOneWithoutUserInput {

    @Field(() => DesignationCreateWithoutUserInput, {nullable:true})
    create?: DesignationCreateWithoutUserInput;

    @Field(() => DesignationCreateOrConnectWithoutUserInput, {nullable:true})
    connectOrCreate?: DesignationCreateOrConnectWithoutUserInput;

    @Field(() => DesignationUpsertWithoutUserInput, {nullable:true})
    upsert?: DesignationUpsertWithoutUserInput;

    @Field(() => DesignationWhereUniqueInput, {nullable:true})
    connect?: DesignationWhereUniqueInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => DesignationUpdateWithoutUserInput, {nullable:true})
    update?: DesignationUpdateWithoutUserInput;
}
