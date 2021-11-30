import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { StationType } from '../prisma/station-type.enum';
import { StationCountAggregate } from './station-count-aggregate.output';
import { StationAvgAggregate } from './station-avg-aggregate.output';
import { StationSumAggregate } from './station-sum-aggregate.output';
import { StationMinAggregate } from './station-min-aggregate.output';
import { StationMaxAggregate } from './station-max-aggregate.output';

@ObjectType()
export class StationGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Float, {nullable:true})
    latitude?: number;

    @Field(() => Float, {nullable:true})
    longitude?: number;

    @Field(() => StationType, {nullable:false})
    stationType!: keyof typeof StationType;

    @Field(() => String, {nullable:true})
    nercCode?: string;

    @Field(() => String, {nullable:true})
    kaedcoCode?: string;

    @Field(() => String, {nullable:true})
    areaOfficeId?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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
