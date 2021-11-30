import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PowerTransformerAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    capacityKVA?: true;
}
