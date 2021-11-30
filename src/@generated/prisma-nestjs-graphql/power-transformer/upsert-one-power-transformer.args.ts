import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PowerTransformerWhereUniqueInput } from './power-transformer-where-unique.input';
import { PowerTransformerCreateInput } from './power-transformer-create.input';
import { PowerTransformerUpdateInput } from './power-transformer-update.input';

@ArgsType()
export class UpsertOnePowerTransformerArgs {

    @Field(() => PowerTransformerWhereUniqueInput, {nullable:false})
    where!: PowerTransformerWhereUniqueInput;

    @Field(() => PowerTransformerCreateInput, {nullable:false})
    create!: PowerTransformerCreateInput;

    @Field(() => PowerTransformerUpdateInput, {nullable:false})
    update!: PowerTransformerUpdateInput;
}
