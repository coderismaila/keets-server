import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AreaOfficeWhereUniqueInput } from './area-office-where-unique.input';
import { AreaOfficeCreateInput } from './area-office-create.input';
import { AreaOfficeUpdateInput } from './area-office-update.input';

@ArgsType()
export class UpsertOneAreaOfficeArgs {

    @Field(() => AreaOfficeWhereUniqueInput, {nullable:false})
    where!: AreaOfficeWhereUniqueInput;

    @Field(() => AreaOfficeCreateInput, {nullable:false})
    create!: AreaOfficeCreateInput;

    @Field(() => AreaOfficeUpdateInput, {nullable:false})
    update!: AreaOfficeUpdateInput;
}
