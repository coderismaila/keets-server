import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StationWhereUniqueInput } from './station-where-unique.input';
import { StationCreateWithoutAreaOfficeInput } from './station-create-without-area-office.input';

@InputType()
export class StationCreateOrConnectWithoutAreaOfficeInput {

    @Field(() => StationWhereUniqueInput, {nullable:false})
    where!: StationWhereUniqueInput;

    @Field(() => StationCreateWithoutAreaOfficeInput, {nullable:false})
    create!: StationCreateWithoutAreaOfficeInput;
}
