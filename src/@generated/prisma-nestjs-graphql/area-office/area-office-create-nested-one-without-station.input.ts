import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AreaOfficeCreateWithoutStationInput } from './area-office-create-without-station.input';
import { AreaOfficeCreateOrConnectWithoutStationInput } from './area-office-create-or-connect-without-station.input';
import { AreaOfficeWhereUniqueInput } from './area-office-where-unique.input';

@InputType()
export class AreaOfficeCreateNestedOneWithoutStationInput {

    @Field(() => AreaOfficeCreateWithoutStationInput, {nullable:true})
    create?: AreaOfficeCreateWithoutStationInput;

    @Field(() => AreaOfficeCreateOrConnectWithoutStationInput, {nullable:true})
    connectOrCreate?: AreaOfficeCreateOrConnectWithoutStationInput;

    @Field(() => AreaOfficeWhereUniqueInput, {nullable:true})
    connect?: AreaOfficeWhereUniqueInput;
}
