import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StationWhereInput } from './station-where.input';
import { StationOrderByWithRelationInput } from './station-order-by-with-relation.input';
import { StationWhereUniqueInput } from './station-where-unique.input';
import { Int } from '@nestjs/graphql';
import { StationScalarFieldEnum } from './station-scalar-field.enum';

@ArgsType()
export class FindFirstStationArgs {

    @Field(() => StationWhereInput, {nullable:true})
    where?: StationWhereInput;

    @Field(() => [StationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StationOrderByWithRelationInput>;

    @Field(() => StationWhereUniqueInput, {nullable:true})
    cursor?: StationWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [StationScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof StationScalarFieldEnum>;
}
