import { Test, TestingModule } from '@nestjs/testing';
import { AreaOfficeResolver } from './area-office.resolver';
import { AreaOfficeService } from './area-office.service';

describe('AreaOfficeResolver', () => {
  let resolver: AreaOfficeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AreaOfficeResolver, AreaOfficeService],
    }).compile();

    resolver = module.get<AreaOfficeResolver>(AreaOfficeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
