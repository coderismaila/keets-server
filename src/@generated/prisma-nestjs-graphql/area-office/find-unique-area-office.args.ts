import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AreaOfficeWhereUniqueInput } from './area-office-where-unique.input';

@ArgsType()
export class FindUniqueAreaOfficeArgs {

    @Field(() => AreaOfficeWhereUniqueInput, {nullable:false})
    where!: AreaOfficeWhereUniqueInput;
}
