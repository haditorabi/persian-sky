import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Listing } from '../../schemas/listing.schema';
import { CreateListingDto } from './dto/create-listing.dto';
import { UpdateListingDto } from './dto/update-listing.dto';

@Injectable()
export class ListingsService {
  constructor(@InjectModel(Listing.name) private listingModel: Model<Listing>) {}

  async create(createListingDto: CreateListingDto): Promise<Listing> {
    const createdListing = new this.listingModel(createListingDto);
    return createdListing.save();
  }

  async findAll(): Promise<Listing[]> {
    return this.listingModel.find().exec();
  }

  async findOne(id: string): Promise<Listing> {
    return this.listingModel.findById(id).exec();
  }

  async update(id: string, updateListingDto: UpdateListingDto): Promise<Listing> {
    return this.listingModel.findByIdAndUpdate(id, updateListingDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Listing> {
    return this.listingModel.findByIdAndRemove(id).exec();
  }
}