import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DesignationUpdateWithoutUserInput } from './designation-update-without-user.input';
import { DesignationCreateWithoutUserInput } from './designation-create-without-user.input';

@InputType()
export class DesignationUpsertWithoutUserInput {

    @Field(() => DesignationUpdateWithoutUserInput, {nullable:false})
    update!: DesignationUpdateWithoutUserInput;

    @Field(() => DesignationCreateWithoutUserInput, {nullable:false})
    create!: DesignationCreateWithoutUserInput;
}
