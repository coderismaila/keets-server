import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StationCreateInput } from './station-create.input';

@ArgsType()
export class CreateOneStationArgs {

    @Field(() => StationCreateInput, {nullable:false})
    data!: StationCreateInput;
}
