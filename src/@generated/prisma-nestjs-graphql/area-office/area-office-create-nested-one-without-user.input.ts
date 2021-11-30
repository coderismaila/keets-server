import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AreaOfficeCreateWithoutUserInput } from './area-office-create-without-user.input';
import { AreaOfficeCreateOrConnectWithoutUserInput } from './area-office-create-or-connect-without-user.input';
import { AreaOfficeWhereUniqueInput } from './area-office-where-unique.input';

@InputType()
export class AreaOfficeCreateNestedOneWithoutUserInput {

    @Field(() => AreaOfficeCreateWithoutUserInput, {nullable:true})
    create?: AreaOfficeCreateWithoutUserInput;

    @Field(() => AreaOfficeCreateOrConnectWithoutUserInput, {nullable:true})
    connectOrCreate?: AreaOfficeCreateOrConnectWithoutUserInput;

    @Field(() => AreaOfficeWhereUniqueInput, {nullable:true})
    connect?: AreaOfficeWhereUniqueInput;
}
