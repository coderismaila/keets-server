import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUncheckedCreateNestedManyWithoutAreaOfficeInput } from '../user/user-unchecked-create-nested-many-without-area-office.input';
import { StationUncheckedCreateNestedManyWithoutAreaOfficeInput } from '../station/station-unchecked-create-nested-many-without-area-office.input';

@InputType()
export class AreaOfficeUncheckedCreateInput {

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

    @Field(() => UserUncheckedCreateNestedManyWithoutAreaOfficeInput, {nullable:true})
    user?: UserUncheckedCreateNestedManyWithoutAreaOfficeInput;

    @Field(() => StationUncheckedCreateNestedManyWithoutAreaOfficeInput, {nullable:true})
    station?: StationUncheckedCreateNestedManyWithoutAreaOfficeInput;
}
