import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateDesignationInput, UpdateDesignationInput } from 'src/graphql';
import { DesignationService } from '../services/designation.service';

@Resolver()
export class DesignationResolver {
  constructor(private readonly designationService: DesignationService) {}

  @Mutation('createDesignation')
  createDesignation(
    @Args('createDesignationInput')
    createDesignationInput: CreateDesignationInput,
  ) {
    return this.designationService.createDesignation(createDesignationInput);
  }

  @Mutation('updateDesignation')
  updateDesignation(
    @Args('updateDesignationInput')
    updateDesignationInput: UpdateDesignationInput,
  ) {
    return this.designationService.updateDesignation(updateDesignationInput);
  }

  @Query('designations')
  getDesignations() {
    return this.designationService.getDesignations();
  }
}
