import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class PowerTransformerSumAggregate {

    @Field(() => Float, {nullable:true})
    capacityKVA?: number;
}
