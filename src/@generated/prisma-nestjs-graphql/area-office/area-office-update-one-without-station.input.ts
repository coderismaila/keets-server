import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AreaOfficeCreateWithoutStationInput } from './area-office-create-without-station.input';
import { AreaOfficeCreateOrConnectWithoutStationInput } from './area-office-create-or-connect-without-station.input';
import { AreaOfficeUpsertWithoutStationInput } from './area-office-upsert-without-station.input';
import { AreaOfficeWhereUniqueInput } from './area-office-where-unique.input';
import { AreaOfficeUpdateWithoutStationInput } from './area-office-update-without-station.input';

@InputType()
export class AreaOfficeUpdateOneWithoutStationInput {

    @Field(() => AreaOfficeCreateWithoutStationInput, {nullable:true})
    create?: AreaOfficeCreateWithoutStationInput;

    @Field(() => AreaOfficeCreateOrConnectWithoutStationInput, {nullable:true})
    connectOrCreate?: AreaOfficeCreateOrConnectWithoutStationInput;

    @Field(() => AreaOfficeUpsertWithoutStationInput, {nullable:true})
    upsert?: AreaOfficeUpsertWithoutStationInput;

    @Field(() => AreaOfficeWhereUniqueInput, {nullable:true})
    connect?: AreaOfficeWhereUniqueInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => AreaOfficeUpdateWithoutStationInput, {nullable:true})
    update?: AreaOfficeUpdateWithoutStationInput;
}
