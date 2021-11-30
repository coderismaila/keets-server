import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PowerTransformerCreateInput } from './power-transformer-create.input';

@ArgsType()
export class CreateOnePowerTransformerArgs {

    @Field(() => PowerTransformerCreateInput, {nullable:false})
    data!: PowerTransformerCreateInput;
}
