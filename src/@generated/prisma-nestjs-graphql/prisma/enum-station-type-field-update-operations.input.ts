import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StationType } from './station-type.enum';

@InputType()
export class EnumStationTypeFieldUpdateOperationsInput {

    @Field(() => StationType, {nullable:true})
    set?: keyof typeof StationType;
}
