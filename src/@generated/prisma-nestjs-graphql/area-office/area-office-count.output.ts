import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AreaOfficeCount {

    @Field(() => Int, {nullable:false})
    user!: number;

    @Field(() => Int, {nullable:false})
    station!: number;
}
