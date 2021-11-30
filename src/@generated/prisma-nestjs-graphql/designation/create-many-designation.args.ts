import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DesignationCreateManyInput } from './designation-create-many.input';

@ArgsType()
export class CreateManyDesignationArgs {

    @Field(() => [DesignationCreateManyInput], {nullable:false})
    data!: Array<DesignationCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
