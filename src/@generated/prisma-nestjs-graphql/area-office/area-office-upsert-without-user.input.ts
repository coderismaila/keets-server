import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AreaOfficeUpdateWithoutUserInput } from './area-office-update-without-user.input';
import { AreaOfficeCreateWithoutUserInput } from './area-office-create-without-user.input';

@InputType()
export class AreaOfficeUpsertWithoutUserInput {

    @Field(() => AreaOfficeUpdateWithoutUserInput, {nullable:false})
    update!: AreaOfficeUpdateWithoutUserInput;

    @Field(() => AreaOfficeCreateWithoutUserInput, {nullable:false})
    create!: AreaOfficeCreateWithoutUserInput;
}
