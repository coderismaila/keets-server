import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DesignationWhereInput } from './designation-where.input';

@InputType()
export class DesignationRelationFilter {

    @Field(() => DesignationWhereInput, {nullable:true})
    is?: DesignationWhereInput;

    @Field(() => DesignationWhereInput, {nullable:true})
    isNot?: DesignationWhereInput;
}
