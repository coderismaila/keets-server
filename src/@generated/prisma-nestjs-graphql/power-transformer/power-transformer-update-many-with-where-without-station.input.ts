import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PowerTransformerScalarWhereInput } from './power-transformer-scalar-where.input';
import { PowerTransformerUpdateManyMutationInput } from './power-transformer-update-many-mutation.input';

@InputType()
export class PowerTransformerUpdateManyWithWhereWithoutStationInput {

    @Field(() => PowerTransformerScalarWhereInput, {nullable:false})
    where!: PowerTransformerScalarWhereInput;

    @Field(() => PowerTransformerUpdateManyMutationInput, {nullable:false})
    data!: PowerTransformerUpdateManyMutationInput;
}
