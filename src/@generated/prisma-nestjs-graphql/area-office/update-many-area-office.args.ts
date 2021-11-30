import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AreaOfficeUpdateManyMutationInput } from './area-office-update-many-mutation.input';
import { AreaOfficeWhereInput } from './area-office-where.input';

@ArgsType()
export class UpdateManyAreaOfficeArgs {

    @Field(() => AreaOfficeUpdateManyMutationInput, {nullable:false})
    data!: AreaOfficeUpdateManyMutationInput;

    @Field(() => AreaOfficeWhereInput, {nullable:true})
    where?: AreaOfficeWhereInput;
}
