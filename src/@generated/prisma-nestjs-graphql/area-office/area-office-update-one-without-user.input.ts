import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AreaOfficeCreateWithoutUserInput } from './area-office-create-without-user.input';
import { AreaOfficeCreateOrConnectWithoutUserInput } from './area-office-create-or-connect-without-user.input';
import { AreaOfficeUpsertWithoutUserInput } from './area-office-upsert-without-user.input';
import { AreaOfficeWhereUniqueInput } from './area-office-where-unique.input';
import { AreaOfficeUpdateWithoutUserInput } from './area-office-update-without-user.input';

@InputType()
export class AreaOfficeUpdateOneWithoutUserInput {

    @Field(() => AreaOfficeCreateWithoutUserInput, {nullable:true})
    create?: AreaOfficeCreateWithoutUserInput;

    @Field(() => AreaOfficeCreateOrConnectWithoutUserInput, {nullable:true})
    connectOrCreate?: AreaOfficeCreateOrConnectWithoutUserInput;

    @Field(() => AreaOfficeUpsertWithoutUserInput, {nullable:true})
    upsert?: AreaOfficeUpsertWithoutUserInput;

    @Field(() => AreaOfficeWhereUniqueInput, {nullable:true})
    connect?: AreaOfficeWhereUniqueInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => AreaOfficeUpdateWithoutUserInput, {nullable:true})
    update?: AreaOfficeUpdateWithoutUserInput;
}
