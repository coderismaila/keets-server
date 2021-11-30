import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DesignationUpdateManyMutationInput } from './designation-update-many-mutation.input';
import { DesignationWhereInput } from './designation-where.input';

@ArgsType()
export class UpdateManyDesignationArgs {

    @Field(() => DesignationUpdateManyMutationInput, {nullable:false})
    data!: DesignationUpdateManyMutationInput;

    @Field(() => DesignationWhereInput, {nullable:true})
    where?: DesignationWhereInput;
}
