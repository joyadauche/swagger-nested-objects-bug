import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';

export class AppDataLevelThree {
  @ApiProperty({
    description: 'pie description here',
    example: 'pie...',
    type: 'string',
  })
  pie: string;

  @ApiProperty({
    description: 'oreo description here',
    example: 'oreo...',
    type: 'string',
  })
  oreo: string;

  @ApiProperty({
    description: 'noughat description here',
    example: 'noughat...',
    type: 'string',
  })
  noughat: string;
}

export class AppDataLevelTwo {
  @ApiProperty({
    description:
      'why does AppDataLevelThree class properties not show too? - only this description shows in the swagger schema',
    type: AppDataLevelThree,
  })
  dataThree: AppDataLevelThree;
}

class AppDataLevelOne {
  @ApiResponseProperty({ type: [AppDataLevelTwo] }) dataTwo: AppDataLevelTwo[];
}

export class AppsResponseDto {
  @ApiResponseProperty({ type: [AppDataLevelOne] })
  dataOne: AppDataLevelOne[];
}
