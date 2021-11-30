import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StationType } from './station-type.enum';

@InputType()
export class NestedEnumStationTypeFilter {

    @Field(() => StationType, {nullable:true})
    equals?: keyof typeof StationType;

    @Field(() => [StationType], {nullable:true})
    in?: Array<keyof typeof StationType>;

    @Field(() => [StationType], {nullable:true})
    notIn?: Array<keyof typeof StationType>;

    @Field(() => NestedEnumStationTypeFilter, {nullable:true})
    not?: NestedEnumStationTypeFilter;
}
