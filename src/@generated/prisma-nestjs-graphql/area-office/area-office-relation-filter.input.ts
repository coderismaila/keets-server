import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AreaOfficeWhereInput } from './area-office-where.input';

@InputType()
export class AreaOfficeRelationFilter {

    @Field(() => AreaOfficeWhereInput, {nullable:true})
    is?: AreaOfficeWhereInput;

    @Field(() => AreaOfficeWhereInput, {nullable:true})
    isNot?: AreaOfficeWhereInput;
}
