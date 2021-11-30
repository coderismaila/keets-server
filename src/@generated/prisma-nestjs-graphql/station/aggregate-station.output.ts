import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { StationCountAggregate } from './station-count-aggregate.output';
import { StationAvgAggregate } from './station-avg-aggregate.output';
import { StationSumAggregate } from './station-sum-aggregate.output';
import { StationMinAggregate } from './station-min-aggregate.output';
import { StationMaxAggregate } from './station-max-aggregate.output';

@ObjectType()
export class AggregateStation {

    @Field(() => StationCountAggregate, {nullable:true})
    _count?: StationCountAggregate;

    @Field(() => StationAvgAggregate, {nullable:true})
    _avg?: StationAvgAggregate;

    @Field(() => StationSumAggregate, {nullable:true})
    _sum?: StationSumAggregate;

    @Field(() => StationMinAggregate, {nullable:true})
    _min?: StationMinAggregate;

    @Field(() => StationMaxAggregate, {nullable:true})
    _max?: StationMaxAggregate;
}
