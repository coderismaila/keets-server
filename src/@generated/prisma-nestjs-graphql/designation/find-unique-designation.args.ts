import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DesignationWhereUniqueInput } from './designation-where-unique.input';

@ArgsType()
export class FindUniqueDesignationArgs {

    @Field(() => DesignationWhereUniqueInput, {nullable:false})
    where!: DesignationWhereUniqueInput;
}
