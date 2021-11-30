import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { PowerTransformerCountAggregate } from './power-transformer-count-aggregate.output';
import { PowerTransformerAvgAggregate } from './power-transformer-avg-aggregate.output';
import { PowerTransformerSumAggregate } from './power-transformer-sum-aggregate.output';
import { PowerTransformerMinAggregate } from './power-transformer-min-aggregate.output';
import { PowerTransformerMaxAggregate } from './power-transformer-max-aggregate.output';

@ObjectType()
export class PowerTransformerGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Float, {nullable:true})
    capacityKVA?: number;

    @Field(() => String, {nullable:false})
    stationId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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
