import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { ListingsModule } from './modules/listings/listings.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI), // MongoDB connection string
    AuthModule,
    UsersModule,
    ListingsModule,
  ],
})
export class AppModule {}