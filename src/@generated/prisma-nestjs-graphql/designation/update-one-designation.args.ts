import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DesignationUpdateInput } from './designation-update.input';
import { DesignationWhereUniqueInput } from './designation-where-unique.input';

@ArgsType()
export class UpdateOneDesignationArgs {

    @Field(() => DesignationUpdateInput, {nullable:false})
    data!: DesignationUpdateInput;

    @Field(() => DesignationWhereUniqueInput, {nullable:false})
    where!: DesignationWhereUniqueInput;
}
