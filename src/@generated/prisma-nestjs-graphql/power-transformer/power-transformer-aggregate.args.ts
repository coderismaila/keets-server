import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PowerTransformerWhereInput } from './power-transformer-where.input';
import { PowerTransformerOrderByWithRelationInput } from './power-transformer-order-by-with-relation.input';
import { PowerTransformerWhereUniqueInput } from './power-transformer-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PowerTransformerCountAggregateInput } from './power-transformer-count-aggregate.input';
import { PowerTransformerAvgAggregateInput } from './power-transformer-avg-aggregate.input';
import { PowerTransformerSumAggregateInput } from './power-transformer-sum-aggregate.input';
import { PowerTransformerMinAggregateInput } from './power-transformer-min-aggregate.input';
import { PowerTransformerMaxAggregateInput } from './power-transformer-max-aggregate.input';

@ArgsType()
export class PowerTransformerAggregateArgs {

    @Field(() => PowerTransformerWhereInput, {nullable:true})
    where?: PowerTransformerWhereInput;

    @Field(() => [PowerTransformerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PowerTransformerOrderByWithRelationInput>;

    @Field(() => PowerTransformerWhereUniqueInput, {nullable:true})
    cursor?: PowerTransformerWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PowerTransformerCountAggregateInput, {nullable:true})
    _count?: PowerTransformerCountAggregateInput;

    @Field(() => PowerTransformerAvgAggregateInput, {nullable:true})
    _avg?: PowerTransformerAvgAggregateInput;

    @Field(() => PowerTransformerSumAggregateInput, {nullable:true})
    _sum?: PowerTransformerSumAggregateInput;

    @Field(() => PowerTransformerMinAggregateInput, {nullable:true})
    _min?: PowerTransformerMinAggregateInput;

    @Field(() => PowerTransformerMaxAggregateInput, {nullable:true})
    _max?: PowerTransformerMaxAggregateInput;
}
