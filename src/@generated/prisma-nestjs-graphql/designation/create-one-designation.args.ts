import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DesignationCreateInput } from './designation-create.input';

@ArgsType()
export class CreateOneDesignationArgs {

    @Field(() => DesignationCreateInput, {nullable:false})
    data!: DesignationCreateInput;
}
