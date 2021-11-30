import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateManyAreaOfficeInput } from './user-create-many-area-office.input';

@InputType()
export class UserCreateManyAreaOfficeInputEnvelope {

    @Field(() => [UserCreateManyAreaOfficeInput], {nullable:false})
    data!: Array<UserCreateManyAreaOfficeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
