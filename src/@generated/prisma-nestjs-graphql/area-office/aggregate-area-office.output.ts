import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AreaOfficeCountAggregate } from './area-office-count-aggregate.output';
import { AreaOfficeMinAggregate } from './area-office-min-aggregate.output';
import { AreaOfficeMaxAggregate } from './area-office-max-aggregate.output';

@ObjectType()
export class AggregateAreaOffice {

    @Field(() => AreaOfficeCountAggregate, {nullable:true})
    _count?: AreaOfficeCountAggregate;

    @Field(() => AreaOfficeMinAggregate, {nullable:true})
    _min?: AreaOfficeMinAggregate;

    @Field(() => AreaOfficeMaxAggregate, {nullable:true})
    _max?: AreaOfficeMaxAggregate;
}
