import { Global, Module } from '@nestjs/common';
import { SpotsService } from './spots.service';
import { SpotsController } from './spots.controller';

@Global()
@Module({
  controllers: [SpotsController],
  providers: [SpotsService],
})
export class SpotsModule {}
