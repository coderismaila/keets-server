import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AreaOfficeUpdateWithoutStationInput } from './area-office-update-without-station.input';
import { AreaOfficeCreateWithoutStationInput } from './area-office-create-without-station.input';

@InputType()
export class AreaOfficeUpsertWithoutStationInput {

    @Field(() => AreaOfficeUpdateWithoutStationInput, {nullable:false})
    update!: AreaOfficeUpdateWithoutStationInput;

    @Field(() => AreaOfficeCreateWithoutStationInput, {nullable:false})
    create!: AreaOfficeCreateWithoutStationInput;
}
