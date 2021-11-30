import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StationCreateManyAreaOfficeInput } from './station-create-many-area-office.input';

@InputType()
export class StationCreateManyAreaOfficeInputEnvelope {

    @Field(() => [StationCreateManyAreaOfficeInput], {nullable:false})
    data!: Array<StationCreateManyAreaOfficeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
