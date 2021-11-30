import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { EnumStationTypeFieldUpdateOperationsInput } from '../prisma/enum-station-type-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { AreaOfficeUpdateOneWithoutStationInput } from '../area-office/area-office-update-one-without-station.input';
import { PowerTransformerUpdateManyWithoutStationInput } from '../power-transformer/power-transformer-update-many-without-station.input';

@InputType()
export class StationUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    latitude?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    longitude?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => EnumStationTypeFieldUpdateOperationsInput, {nullable:true})
    stationType?: EnumStationTypeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    nercCode?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    kaedcoCode?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => AreaOfficeUpdateOneWithoutStationInput, {nullable:true})
    areaOffice?: AreaOfficeUpdateOneWithoutStationInput;

    @Field(() => PowerTransformerUpdateManyWithoutStationInput, {nullable:true})
    powerTransformer?: PowerTransformerUpdateManyWithoutStationInput;
}
