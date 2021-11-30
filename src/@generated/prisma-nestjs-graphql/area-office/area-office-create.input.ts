import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedManyWithoutAreaOfficeInput } from '../user/user-create-nested-many-without-area-office.input';
import { StationCreateNestedManyWithoutAreaOfficeInput } from '../station/station-create-nested-many-without-area-office.input';

@InputType()
export class AreaOfficeCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    nercCode!: string;

    @Field(() => String, {nullable:false})
    kaedcoCode!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedManyWithoutAreaOfficeInput, {nullable:true})
    user?: UserCreateNestedManyWithoutAreaOfficeInput;

    @Field(() => StationCreateNestedManyWithoutAreaOfficeInput, {nullable:true})
    station?: StationCreateNestedManyWithoutAreaOfficeInput;
}
