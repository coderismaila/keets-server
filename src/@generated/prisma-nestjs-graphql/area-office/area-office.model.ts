import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Station } from '../station/station.model';
import { AreaOfficeCount } from './area-office-count.output';

@ObjectType()
export class AreaOffice {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    nercCode!: string;

    @Field(() => String, {nullable:false})
    kaedcoCode!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [User], {nullable:true})
    user?: Array<User>;

    @Field(() => [Station], {nullable:true})
    station?: Array<Station>;

    @Field(() => AreaOfficeCount, {nullable:true})
    _count?: AreaOfficeCount | null;
}
