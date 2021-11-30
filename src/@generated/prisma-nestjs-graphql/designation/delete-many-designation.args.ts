import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DesignationWhereInput } from './designation-where.input';

@ArgsType()
export class DeleteManyDesignationArgs {

    @Field(() => DesignationWhereInput, {nullable:true})
    where?: DesignationWhereInput;
}
