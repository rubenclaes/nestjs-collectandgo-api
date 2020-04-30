import {
  Controller,
  Post,
  Body,
  Get,
  Query,
  Param,
  Put,
  Delete,
} from '@nestjs/common';

import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { CreateSupermarketDto } from './dto/create-supermarket.dto';
import { UpdateSupermarketDto } from './dto/update-supermarket.dto';
import { ListAllEntities } from './dto/findAll-supermarket.dto';
import { Supermarket } from './classes/supermarket.class';
import { SupermarketsService } from './supermarkets.service';

@ApiBearerAuth()
@ApiTags('supermarkets')
@Controller('supermarkets')
export class SupermarketsController {
  constructor(private supermarketsService: SupermarketsService) {}

  @Post()
  @ApiOperation({ summary: 'Create supermarket' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(
    @Body() createSupermarketDto: CreateSupermarketDto,
  ): Promise<Supermarket> {
    return this.supermarketsService.create(createSupermarketDto);
  }

  @Get()
  async findAll(@Query() query: ListAllEntities): Promise<Supermarket[]> {
    return this.supermarketsService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Supermarket,
  })
  findOne(@Param('id') id: string): Supermarket {
    return this.supermarketsService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateSupermarketDto: UpdateSupermarketDto,
  ) {
    return `This action updates a #${id} supermarket`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} supermarket`;
  }
}
