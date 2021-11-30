import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StationType } from './station-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumStationTypeFilter } from './nested-enum-station-type-filter.input';

@InputType()
export class NestedEnumStationTypeWithAggregatesFilter {

    @Field(() => StationType, {nullable:true})
    equals?: keyof typeof StationType;

    @Field(() => [StationType], {nullable:true})
    in?: Array<keyof typeof StationType>;

    @Field(() => [StationType], {nullable:true})
    notIn?: Array<keyof typeof StationType>;

    @Field(() => NestedEnumStationTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumStationTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumStationTypeFilter, {nullable:true})
    _min?: NestedEnumStationTypeFilter;

    @Field(() => NestedEnumStationTypeFilter, {nullable:true})
    _max?: NestedEnumStationTypeFilter;
}
