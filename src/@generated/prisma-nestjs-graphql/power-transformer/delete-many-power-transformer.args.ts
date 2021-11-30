import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PowerTransformerWhereInput } from './power-transformer-where.input';

@ArgsType()
export class DeleteManyPowerTransformerArgs {

    @Field(() => PowerTransformerWhereInput, {nullable:true})
    where?: PowerTransformerWhereInput;
}
