import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PowerTransformerWhereUniqueInput } from './power-transformer-where-unique.input';

@ArgsType()
export class DeleteOnePowerTransformerArgs {

    @Field(() => PowerTransformerWhereUniqueInput, {nullable:false})
    where!: PowerTransformerWhereUniqueInput;
}
