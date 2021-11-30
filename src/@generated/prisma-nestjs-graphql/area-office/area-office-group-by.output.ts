import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AreaOfficeCountAggregate } from './area-office-count-aggregate.output';
import { AreaOfficeMinAggregate } from './area-office-min-aggregate.output';
import { AreaOfficeMaxAggregate } from './area-office-max-aggregate.output';

@ObjectType()
export class AreaOfficeGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    nercCode!: string;

    @Field(() => String, {nullable:false})
    kaedcoCode!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => AreaOfficeCountAggregate, {nullable:true})
    _count?: AreaOfficeCountAggregate;

    @Field(() => AreaOfficeMinAggregate, {nullable:true})
    _min?: AreaOfficeMinAggregate;

    @Field(() => AreaOfficeMaxAggregate, {nullable:true})
    _max?: AreaOfficeMaxAggregate;
}
