import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { PowerTransformerCountAggregate } from './power-transformer-count-aggregate.output';
import { PowerTransformerAvgAggregate } from './power-transformer-avg-aggregate.output';
import { PowerTransformerSumAggregate } from './power-transformer-sum-aggregate.output';
import { PowerTransformerMinAggregate } from './power-transformer-min-aggregate.output';
import { PowerTransformerMaxAggregate } from './power-transformer-max-aggregate.output';

@ObjectType()
export class AggregatePowerTransformer {

    @Field(() => PowerTransformerCountAggregate, {nullable:true})
    _count?: PowerTransformerCountAggregate;

    @Field(() => PowerTransformerAvgAggregate, {nullable:true})
    _avg?: PowerTransformerAvgAggregate;

    @Field(() => PowerTransformerSumAggregate, {nullable:true})
    _sum?: PowerTransformerSumAggregate;

    @Field(() => PowerTransformerMinAggregate, {nullable:true})
    _min?: PowerTransformerMinAggregate;

    @Field(() => PowerTransformerMaxAggregate, {nullable:true})
    _max?: PowerTransformerMaxAggregate;
}
