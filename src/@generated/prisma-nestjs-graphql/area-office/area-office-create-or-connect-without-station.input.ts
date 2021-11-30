import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AreaOfficeWhereUniqueInput } from './area-office-where-unique.input';
import { AreaOfficeCreateWithoutStationInput } from './area-office-create-without-station.input';

@InputType()
export class AreaOfficeCreateOrConnectWithoutStationInput {

    @Field(() => AreaOfficeWhereUniqueInput, {nullable:false})
    where!: AreaOfficeWhereUniqueInput;

    @Field(() => AreaOfficeCreateWithoutStationInput, {nullable:false})
    create!: AreaOfficeCreateWithoutStationInput;
}
