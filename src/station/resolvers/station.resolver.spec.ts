import { Test, TestingModule } from '@nestjs/testing';
import { TransmissionStationResolver } from './station.resolver';
import { StationService } from '../services/station.service';

describe('TransmissionStationResolver', () => {
  let resolver: TransmissionStationResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransmissionStationResolver, StationService],
    }).compile();

    resolver = module.get<TransmissionStationResolver>(
      TransmissionStationResolver,
    );
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
