import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateAreaOfficeInput, UpdateAreaOfficeInput } from 'src/graphql';
import { AreaOfficeService } from './area-office.service';

@Resolver('AreaOffice')
export class AreaOfficeResolver {
  constructor(private readonly areaOfficeService: AreaOfficeService) {}

  @Mutation('createAreaOffice')
  create(
    @Args('createAreaOfficeInput') createAreaOfficeInput: CreateAreaOfficeInput,
  ) {
    return this.areaOfficeService.createAreaOffice(createAreaOfficeInput);
  }

  @Query('areaOffices')
  findAreaOffices() {
    return this.areaOfficeService.findAreaOffices();
  }

  @Query('areaOfficeById')
  findAreaOfficeById(@Args('id') id: string) {
    return this.areaOfficeService.findAreaOfficeById(id);
  }

  @Mutation('updateAreaOffice')
  updateAreaOffice(
    @Args('updateAreaOfficeInput') updateAreaOfficeInput: UpdateAreaOfficeInput,
  ) {
    return this.areaOfficeService.updateAreaOffice(updateAreaOfficeInput);
  }

  @Mutation('removeAreaOffice')
  remove(@Args('id') id: string) {
    return this.areaOfficeService.deleteAreaOffice(id);
  }
}
