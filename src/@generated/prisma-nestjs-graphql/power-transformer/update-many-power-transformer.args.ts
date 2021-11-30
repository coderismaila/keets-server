import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PowerTransformerUpdateManyMutationInput } from './power-transformer-update-many-mutation.input';
import { PowerTransformerWhereInput } from './power-transformer-where.input';

@ArgsType()
export class UpdateManyPowerTransformerArgs {

    @Field(() => PowerTransformerUpdateManyMutationInput, {nullable:false})
    data!: PowerTransformerUpdateManyMutationInput;

    @Field(() => PowerTransformerWhereInput, {nullable:true})
    where?: PowerTransformerWhereInput;
}
