import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StationCreateWithoutAreaOfficeInput } from './station-create-without-area-office.input';
import { StationCreateOrConnectWithoutAreaOfficeInput } from './station-create-or-connect-without-area-office.input';
import { StationUpsertWithWhereUniqueWithoutAreaOfficeInput } from './station-upsert-with-where-unique-without-area-office.input';
import { StationCreateManyAreaOfficeInputEnvelope } from './station-create-many-area-office-input-envelope.input';
import { StationWhereUniqueInput } from './station-where-unique.input';
import { StationUpdateWithWhereUniqueWithoutAreaOfficeInput } from './station-update-with-where-unique-without-area-office.input';
import { StationUpdateManyWithWhereWithoutAreaOfficeInput } from './station-update-many-with-where-without-area-office.input';
import { StationScalarWhereInput } from './station-scalar-where.input';

@InputType()
export class StationUpdateManyWithoutAreaOfficeInput {

    @Field(() => [StationCreateWithoutAreaOfficeInput], {nullable:true})
    create?: Array<StationCreateWithoutAreaOfficeInput>;

    @Field(() => [StationCreateOrConnectWithoutAreaOfficeInput], {nullable:true})
    connectOrCreate?: Array<StationCreateOrConnectWithoutAreaOfficeInput>;

    @Field(() => [StationUpsertWithWhereUniqueWithoutAreaOfficeInput], {nullable:true})
    upsert?: Array<StationUpsertWithWhereUniqueWithoutAreaOfficeInput>;

    @Field(() => StationCreateManyAreaOfficeInputEnvelope, {nullable:true})
    createMany?: StationCreateManyAreaOfficeInputEnvelope;

    @Field(() => [StationWhereUniqueInput], {nullable:true})
    connect?: Array<StationWhereUniqueInput>;

    @Field(() => [StationWhereUniqueInput], {nullable:true})
    set?: Array<StationWhereUniqueInput>;

    @Field(() => [StationWhereUniqueInput], {nullable:true})
    disconnect?: Array<StationWhereUniqueInput>;

    @Field(() => [StationWhereUniqueInput], {nullable:true})
    delete?: Array<StationWhereUniqueInput>;

    @Field(() => [StationUpdateWithWhereUniqueWithoutAreaOfficeInput], {nullable:true})
    update?: Array<StationUpdateWithWhereUniqueWithoutAreaOfficeInput>;

    @Field(() => [StationUpdateManyWithWhereWithoutAreaOfficeInput], {nullable:true})
    updateMany?: Array<StationUpdateManyWithWhereWithoutAreaOfficeInput>;

    @Field(() => [StationScalarWhereInput], {nullable:true})
    deleteMany?: Array<StationScalarWhereInput>;
}
