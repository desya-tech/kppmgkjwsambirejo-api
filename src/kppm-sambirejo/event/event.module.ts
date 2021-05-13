import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Eventls } from './entities/event.entity';
import { Image } from './entities/image.entity';
import { KatEvn } from './entities/kategori_event.entity';
import { Pelayan } from './entities/pelayan.entity';
import { Status } from './entities/status.entity';
import { TpEvent } from './entities/tipe_pelaksanaan_event.entity';
import { MulterModule } from '@nestjs/platform-express';


@Module({
  imports: [TypeOrmModule.forFeature([Eventls,KatEvn,Pelayan,TpEvent,Status,Image]),
  MulterModule.register({
    dest: './uploads',
  }),],
  providers: [EventService],
  controllers: [EventController]
})
export class EventModule {}
