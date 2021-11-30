import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DesignationWhereInput } from './designation-where.input';
import { DesignationOrderByWithRelationInput } from './designation-order-by-with-relation.input';
import { DesignationWhereUniqueInput } from './designation-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DesignationScalarFieldEnum } from './designation-scalar-field.enum';

@ArgsType()
export class FindFirstDesignationArgs {

    @Field(() => DesignationWhereInput, {nullable:true})
    where?: DesignationWhereInput;

    @Field(() => [DesignationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DesignationOrderByWithRelationInput>;

    @Field(() => DesignationWhereUniqueInput, {nullable:true})
    cursor?: DesignationWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DesignationScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DesignationScalarFieldEnum>;
}
