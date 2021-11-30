import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StationScalarWhereInput } from './station-scalar-where.input';
import { StationUpdateManyMutationInput } from './station-update-many-mutation.input';

@InputType()
export class StationUpdateManyWithWhereWithoutAreaOfficeInput {

    @Field(() => StationScalarWhereInput, {nullable:false})
    where!: StationScalarWhereInput;

    @Field(() => StationUpdateManyMutationInput, {nullable:false})
    data!: StationUpdateManyMutationInput;
}
