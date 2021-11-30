import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AreaOfficeWhereInput } from './area-office-where.input';
import { AreaOfficeOrderByWithRelationInput } from './area-office-order-by-with-relation.input';
import { AreaOfficeWhereUniqueInput } from './area-office-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AreaOfficeCountAggregateInput } from './area-office-count-aggregate.input';
import { AreaOfficeMinAggregateInput } from './area-office-min-aggregate.input';
import { AreaOfficeMaxAggregateInput } from './area-office-max-aggregate.input';

@ArgsType()
export class AreaOfficeAggregateArgs {

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

    @Field(() => AreaOfficeCountAggregateInput, {nullable:true})
    _count?: AreaOfficeCountAggregateInput;

    @Field(() => AreaOfficeMinAggregateInput, {nullable:true})
    _min?: AreaOfficeMinAggregateInput;

    @Field(() => AreaOfficeMaxAggregateInput, {nullable:true})
    _max?: AreaOfficeMaxAggregateInput;
}
