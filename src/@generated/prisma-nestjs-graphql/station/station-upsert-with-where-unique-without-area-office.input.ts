import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StationWhereUniqueInput } from './station-where-unique.input';
import { StationUpdateWithoutAreaOfficeInput } from './station-update-without-area-office.input';
import { StationCreateWithoutAreaOfficeInput } from './station-create-without-area-office.input';

@InputType()
export class StationUpsertWithWhereUniqueWithoutAreaOfficeInput {

    @Field(() => StationWhereUniqueInput, {nullable:false})
    where!: StationWhereUniqueInput;

    @Field(() => StationUpdateWithoutAreaOfficeInput, {nullable:false})
    update!: StationUpdateWithoutAreaOfficeInput;

    @Field(() => StationCreateWithoutAreaOfficeInput, {nullable:false})
    create!: StationCreateWithoutAreaOfficeInput;
}
