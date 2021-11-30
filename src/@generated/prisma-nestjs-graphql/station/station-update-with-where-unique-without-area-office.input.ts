import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StationWhereUniqueInput } from './station-where-unique.input';
import { StationUpdateWithoutAreaOfficeInput } from './station-update-without-area-office.input';

@InputType()
export class StationUpdateWithWhereUniqueWithoutAreaOfficeInput {

    @Field(() => StationWhereUniqueInput, {nullable:false})
    where!: StationWhereUniqueInput;

    @Field(() => StationUpdateWithoutAreaOfficeInput, {nullable:false})
    data!: StationUpdateWithoutAreaOfficeInput;
}
