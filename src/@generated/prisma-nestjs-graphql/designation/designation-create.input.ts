import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedManyWithoutDesignationInput } from '../user/user-create-nested-many-without-designation.input';

@InputType()
export class DesignationCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => UserCreateNestedManyWithoutDesignationInput, {nullable:true})
    User?: UserCreateNestedManyWithoutDesignationInput;
}
