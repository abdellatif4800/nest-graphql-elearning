import { Controller, Get, Logger } from '@nestjs/common';
import { AdminApiService } from './admin-api.service';
import {
  HealthCheck,
  HealthCheckService,
  HttpHealthIndicator,
} from '@nestjs/terminus';
import { IsPublic } from 'apiLibs/common';

@Controller()
export class AdminApiController {
  constructor(
    private readonly adminApiService: AdminApiService,
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
  ) {}

  // @IsPublic(true)
  @Get('apiCheck')
  @HealthCheck()
  async check() {
    try {
      const result = await this.health.check([
        () =>
          this.http.pingCheck(
            'api-test',
            'http://localhost:8001/adminApi/health/ping',
          ),
      ]);
      Logger.log('Api is UP');
      return result;
    } catch (error) {
      Logger.error('API is DOWN', error.stack);
      throw error;
    }
  }

  // @IsPublic(true)
  @Get('ping')
  ping() {
    return { status: 'ok' };
  }
}
