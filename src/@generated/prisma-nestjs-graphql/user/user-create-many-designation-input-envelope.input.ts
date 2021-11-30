import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateManyDesignationInput } from './user-create-many-designation.input';

@InputType()
export class UserCreateManyDesignationInputEnvelope {

    @Field(() => [UserCreateManyDesignationInput], {nullable:false})
    data!: Array<UserCreateManyDesignationInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
