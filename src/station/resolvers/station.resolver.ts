import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { StationCreateInput } from 'src/@generated/prisma-nestjs-graphql/station/station-create.input';
import { StationUpdateInput } from 'src/@generated/prisma-nestjs-graphql/station/station-update.input';
import { StationService } from '../services/station.service';

@Resolver('Station')
export class StationResolver {
  constructor(private readonly stationService: StationService) {}

  @Mutation('createStation')
  create(
    @Args('createStationInput')
    stationCreateInput: StationCreateInput,
  ) {
    return this.stationService.createStation(stationCreateInput);
  }

  @Query('stations')
  findAll() {
    return this.stationService.stations();
  }

  @Query('stationById')
  findOne(@Args('id') id: string) {
    return this.stationService.stationById(id);
  }

  @Mutation('updateStation')
  update(
    @Args('id') id: string,
    @Args('updateStationInput')
    stationUpdateInput: StationUpdateInput,
  ) {
    return this.stationService.updateStation(id, stationUpdateInput);
  }

  @Mutation('deleteStation')
  remove(@Args('id') id: string) {
    return this.stationService.deleteStation(id);
  }
}
