import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DesignationCount {

    @Field(() => Int, {nullable:false})
    User!: number;
}
