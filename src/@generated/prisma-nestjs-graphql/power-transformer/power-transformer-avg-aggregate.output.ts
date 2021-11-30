import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class PowerTransformerAvgAggregate {

    @Field(() => Float, {nullable:true})
    capacityKVA?: number;
}
