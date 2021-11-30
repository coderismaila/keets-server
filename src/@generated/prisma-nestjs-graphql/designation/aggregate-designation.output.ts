import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DesignationCountAggregate } from './designation-count-aggregate.output';
import { DesignationMinAggregate } from './designation-min-aggregate.output';
import { DesignationMaxAggregate } from './designation-max-aggregate.output';

@ObjectType()
export class AggregateDesignation {

    @Field(() => DesignationCountAggregate, {nullable:true})
    _count?: DesignationCountAggregate;

    @Field(() => DesignationMinAggregate, {nullable:true})
    _min?: DesignationMinAggregate;

    @Field(() => DesignationMaxAggregate, {nullable:true})
    _max?: DesignationMaxAggregate;
}
