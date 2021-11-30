import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AreaOfficeWhereInput } from './area-office-where.input';

@ArgsType()
export class DeleteManyAreaOfficeArgs {

    @Field(() => AreaOfficeWhereInput, {nullable:true})
    where?: AreaOfficeWhereInput;
}
