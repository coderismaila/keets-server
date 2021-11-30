import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PowerTransformerUpdateInput } from './power-transformer-update.input';
import { PowerTransformerWhereUniqueInput } from './power-transformer-where-unique.input';

@ArgsType()
export class UpdateOnePowerTransformerArgs {

    @Field(() => PowerTransformerUpdateInput, {nullable:false})
    data!: PowerTransformerUpdateInput;

    @Field(() => PowerTransformerWhereUniqueInput, {nullable:false})
    where!: PowerTransformerWhereUniqueInput;
}
