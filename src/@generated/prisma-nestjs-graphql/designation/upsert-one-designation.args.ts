import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DesignationWhereUniqueInput } from './designation-where-unique.input';
import { DesignationCreateInput } from './designation-create.input';
import { DesignationUpdateInput } from './designation-update.input';

@ArgsType()
export class UpsertOneDesignationArgs {

    @Field(() => DesignationWhereUniqueInput, {nullable:false})
    where!: DesignationWhereUniqueInput;

    @Field(() => DesignationCreateInput, {nullable:false})
    create!: DesignationCreateInput;

    @Field(() => DesignationUpdateInput, {nullable:false})
    update!: DesignationUpdateInput;
}
