import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AreaOfficeCreateManyInput } from './area-office-create-many.input';

@ArgsType()
export class CreateManyAreaOfficeArgs {

    @Field(() => [AreaOfficeCreateManyInput], {nullable:false})
    data!: Array<AreaOfficeCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
