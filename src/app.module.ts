import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import Settings from './settings';

@Module({
  imports: [TypeOrmModule.forRoot(Settings.DB_CONN)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
