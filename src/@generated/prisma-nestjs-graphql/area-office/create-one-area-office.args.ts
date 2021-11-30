import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AreaOfficeCreateInput } from './area-office-create.input';

@ArgsType()
export class CreateOneAreaOfficeArgs {

    @Field(() => AreaOfficeCreateInput, {nullable:false})
    data!: AreaOfficeCreateInput;
}
