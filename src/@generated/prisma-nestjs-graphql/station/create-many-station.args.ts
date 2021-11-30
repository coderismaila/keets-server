import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StationCreateManyInput } from './station-create-many.input';

@ArgsType()
export class CreateManyStationArgs {

    @Field(() => [StationCreateManyInput], {nullable:false})
    data!: Array<StationCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
