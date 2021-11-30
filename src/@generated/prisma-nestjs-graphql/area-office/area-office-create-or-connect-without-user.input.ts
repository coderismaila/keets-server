import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AreaOfficeWhereUniqueInput } from './area-office-where-unique.input';
import { AreaOfficeCreateWithoutUserInput } from './area-office-create-without-user.input';

@InputType()
export class AreaOfficeCreateOrConnectWithoutUserInput {

    @Field(() => AreaOfficeWhereUniqueInput, {nullable:false})
    where!: AreaOfficeWhereUniqueInput;

    @Field(() => AreaOfficeCreateWithoutUserInput, {nullable:false})
    create!: AreaOfficeCreateWithoutUserInput;
}
