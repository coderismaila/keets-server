import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class UserWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;

    @Field(() => String, {nullable:true})
    @Validator.Length(3, 25)
    username?: string;

    @Field(() => String, {nullable:true})
    staffId?: string;
}
