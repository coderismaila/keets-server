import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AreaOfficeWhereInput } from './area-office-where.input';
import { AreaOfficeOrderByWithRelationInput } from './area-office-order-by-with-relation.input';
import { AreaOfficeWhereUniqueInput } from './area-office-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AreaOfficeScalarFieldEnum } from './area-office-scalar-field.enum';

@ArgsType()
export class FindManyAreaOfficeArgs {

    @Field(() => AreaOfficeWhereInput, {nullable:true})
    where?: AreaOfficeWhereInput;

    @Field(() => [AreaOfficeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AreaOfficeOrderByWithRelationInput>;

    @Field(() => AreaOfficeWhereUniqueInput, {nullable:true})
    cursor?: AreaOfficeWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AreaOfficeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AreaOfficeScalarFieldEnum>;
}
