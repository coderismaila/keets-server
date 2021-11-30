import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StationUncheckedCreateNestedManyWithoutAreaOfficeInput } from '../station/station-unchecked-create-nested-many-without-area-office.input';

@InputType()
export class AreaOfficeUncheckedCreateWithoutUserInput {

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

    @Field(() => StationUncheckedCreateNestedManyWithoutAreaOfficeInput, {nullable:true})
    station?: StationUncheckedCreateNestedManyWithoutAreaOfficeInput;
}
