import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { DesignationCount } from './designation-count.output';

@ObjectType()
export class Designation {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => [User], {nullable:true})
    User?: Array<User>;

    @Field(() => DesignationCount, {nullable:true})
    _count?: DesignationCount | null;
}
