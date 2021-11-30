import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PowerTransformerCreateManyInput } from './power-transformer-create-many.input';

@ArgsType()
export class CreateManyPowerTransformerArgs {

    @Field(() => [PowerTransformerCreateManyInput], {nullable:false})
    data!: Array<PowerTransformerCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
