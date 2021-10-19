import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppsResponseDto } from './app.dto';

@Controller('/')
export class AppController {
  @Get('/')
  @ApiTags('Apps')
  @ApiResponse({ status: 200, type: AppsResponseDto })
  apps() {
    return 'Hello world!';
  }
}
