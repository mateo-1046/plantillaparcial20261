import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { MetricsService } from './metrics.service';
import { CreateMetricDto } from './dto/create-metric.dto';
import { UpdateMetricDto } from './dto/update-metric.dto';

import { EngagementQueryDto } from './dto/engagementQuery.dto';
import { cmpQueryDto } from './dto/cmpQuery.dto';


@Controller('metrics')
export class MetricsController {
  constructor(private readonly metricsService: MetricsService) {}

  @Post()
  create(@Body() createMetricDto: CreateMetricDto) {
    return this.metricsService.create(createMetricDto);
  }

  @Get('engagement')
  engagement(@Query() engagementQuery: EngagementQueryDto) {
    return this.metricsService.engagement(engagementQuery);
  }

  @Get('cmp')
  cmp(@Query() cmpQuery: cmpQueryDto) {
    return this.metricsService.cmp(cmpQuery);
  }

  @Get()
  findAll() {
    return this.metricsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.metricsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMetricDto: UpdateMetricDto) {
    return this.metricsService.update(+id, updateMetricDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.metricsService.remove(+id);
  }
}
