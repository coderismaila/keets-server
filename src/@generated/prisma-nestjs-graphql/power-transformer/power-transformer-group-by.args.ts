import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PowerTransformerWhereInput } from './power-transformer-where.input';
import { PowerTransformerOrderByWithAggregationInput } from './power-transformer-order-by-with-aggregation.input';
import { PowerTransformerScalarFieldEnum } from './power-transformer-scalar-field.enum';
import { PowerTransformerScalarWhereWithAggregatesInput } from './power-transformer-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { PowerTransformerCountAggregateInput } from './power-transformer-count-aggregate.input';
import { PowerTransformerAvgAggregateInput } from './power-transformer-avg-aggregate.input';
import { PowerTransformerSumAggregateInput } from './power-transformer-sum-aggregate.input';
import { PowerTransformerMinAggregateInput } from './power-transformer-min-aggregate.input';
import { PowerTransformerMaxAggregateInput } from './power-transformer-max-aggregate.input';

@ArgsType()
export class PowerTransformerGroupByArgs {

    @Field(() => PowerTransformerWhereInput, {nullable:true})
    where?: PowerTransformerWhereInput;

    @Field(() => [PowerTransformerOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PowerTransformerOrderByWithAggregationInput>;

    @Field(() => [PowerTransformerScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PowerTransformerScalarFieldEnum>;

    @Field(() => PowerTransformerScalarWhereWithAggregatesInput, {nullable:true})
    having?: PowerTransformerScalarWhereWithAggregatesInput;

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
