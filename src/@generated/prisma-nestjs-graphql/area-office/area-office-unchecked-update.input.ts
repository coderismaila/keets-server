import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUncheckedUpdateManyWithoutAreaOfficeInput } from '../user/user-unchecked-update-many-without-area-office.input';
import { StationUncheckedUpdateManyWithoutAreaOfficeInput } from '../station/station-unchecked-update-many-without-area-office.input';

@InputType()
export class AreaOfficeUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    nercCode?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    kaedcoCode?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUncheckedUpdateManyWithoutAreaOfficeInput, {nullable:true})
    user?: UserUncheckedUpdateManyWithoutAreaOfficeInput;

    @Field(() => StationUncheckedUpdateManyWithoutAreaOfficeInput, {nullable:true})
    station?: StationUncheckedUpdateManyWithoutAreaOfficeInput;
}
