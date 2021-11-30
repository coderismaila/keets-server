import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StationCreateWithoutAreaOfficeInput } from './station-create-without-area-office.input';
import { StationCreateOrConnectWithoutAreaOfficeInput } from './station-create-or-connect-without-area-office.input';
import { StationCreateManyAreaOfficeInputEnvelope } from './station-create-many-area-office-input-envelope.input';
import { StationWhereUniqueInput } from './station-where-unique.input';

@InputType()
export class StationCreateNestedManyWithoutAreaOfficeInput {

    @Field(() => [StationCreateWithoutAreaOfficeInput], {nullable:true})
    create?: Array<StationCreateWithoutAreaOfficeInput>;

    @Field(() => [StationCreateOrConnectWithoutAreaOfficeInput], {nullable:true})
    connectOrCreate?: Array<StationCreateOrConnectWithoutAreaOfficeInput>;

    @Field(() => StationCreateManyAreaOfficeInputEnvelope, {nullable:true})
    createMany?: StationCreateManyAreaOfficeInputEnvelope;

    @Field(() => [StationWhereUniqueInput], {nullable:true})
    connect?: Array<StationWhereUniqueInput>;
}
