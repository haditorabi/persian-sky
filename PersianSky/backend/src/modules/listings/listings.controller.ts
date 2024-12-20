import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ListingsService } from './listings.service';
import { CreateListingDto } from './dto/create-listing.dto';
import { Listing } from '../../schemas/listing.schema';

@Controller('listings')
export class ListingsController {
  constructor(private readonly listingsService: ListingsService) {}

  @Post()
  async create(@Body() createListingDto: CreateListingDto): Promise<Listing> {
    return this.listingsService.create(createListingDto);
  }

  @Get()
  async findAll(): Promise<Listing[]> {
    return this.listingsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Listing> {
    return this.listingsService.findOne(id);
  }
}