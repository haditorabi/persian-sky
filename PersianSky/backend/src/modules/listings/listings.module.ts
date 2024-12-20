import { Module } from '@nestjs/common';
import { ListingsController } from './listings.controller';
import { ListingsService } from './listings.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ListingSchema } from '../../schemas/listing.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Listing', schema: ListingSchema }]),
  ],
  controllers: [ListingsController],
  providers: [ListingsService],
  exports: [ListingsService],
})
export class ListingsModule {}