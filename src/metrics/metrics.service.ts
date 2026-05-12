import { Injectable } from '@nestjs/common';
import { CreateMetricDto } from './dto/create-metric.dto';
import { UpdateMetricDto } from './dto/update-metric.dto';
import { EngagementQueryDto } from './dto/engagementQuery.dto';
import { cmpQueryDto } from './dto/cmpQuery.dto';

@Injectable()
export class MetricsService {

  engagement(engagementQuery: EngagementQueryDto) {
    const { likes, comments, followers } = engagementQuery;
    const engagementRate = (likes + comments) / followers * 100;
    return { rate: engagementRate };
  }

  cmp(cmpQuery: cmpQueryDto) {
    const { cost, impressions} = cmpQuery;
    const cmpRate = (cost / impressions) * 100;
    return { cmp: cmpRate };
  }

  create(createMetricDto: CreateMetricDto) {
    return 'This action adds a new metric';
  }

  findAll() {
    return `This action returns all metrics`;
  }

  findOne(id: number) {
    return `This action returns a #${id} metric`;
  }

  update(id: number, updateMetricDto: UpdateMetricDto) {
    return `This action updates a #${id} metric`;
  }

  remove(id: number) {
    return `This action removes a #${id} metric`;
  }
}
