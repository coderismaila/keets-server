import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PowerTransformerCreateManyStationInput } from './power-transformer-create-many-station.input';

@InputType()
export class PowerTransformerCreateManyStationInputEnvelope {

    @Field(() => [PowerTransformerCreateManyStationInput], {nullable:false})
    data!: Array<PowerTransformerCreateManyStationInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
