import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class StationCount {

    @Field(() => Int, {nullable:false})
    powerTransformer!: number;
}
