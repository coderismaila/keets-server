import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StationType } from './station-type.enum';
import { NestedEnumStationTypeFilter } from './nested-enum-station-type-filter.input';

@InputType()
export class EnumStationTypeFilter {

    @Field(() => StationType, {nullable:true})
    equals?: keyof typeof StationType;

    @Field(() => [StationType], {nullable:true})
    in?: Array<keyof typeof StationType>;

    @Field(() => [StationType], {nullable:true})
    notIn?: Array<keyof typeof StationType>;

    @Field(() => NestedEnumStationTypeFilter, {nullable:true})
    not?: NestedEnumStationTypeFilter;
}
