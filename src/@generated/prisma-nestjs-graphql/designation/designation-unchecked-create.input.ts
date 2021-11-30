import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUncheckedCreateNestedManyWithoutDesignationInput } from '../user/user-unchecked-create-nested-many-without-designation.input';

@InputType()
export class DesignationUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => UserUncheckedCreateNestedManyWithoutDesignationInput, {nullable:true})
    User?: UserUncheckedCreateNestedManyWithoutDesignationInput;
}
