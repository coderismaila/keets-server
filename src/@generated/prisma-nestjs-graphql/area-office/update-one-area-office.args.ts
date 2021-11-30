import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AreaOfficeUpdateInput } from './area-office-update.input';
import { AreaOfficeWhereUniqueInput } from './area-office-where-unique.input';

@ArgsType()
export class UpdateOneAreaOfficeArgs {

    @Field(() => AreaOfficeUpdateInput, {nullable:false})
    data!: AreaOfficeUpdateInput;

    @Field(() => AreaOfficeWhereUniqueInput, {nullable:false})
    where!: AreaOfficeWhereUniqueInput;
}
