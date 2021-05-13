import { Body, Controller,Get, Post, Put ,UseInterceptors, UploadedFile, UploadedFiles, Res, Param, HttpStatus } from '@nestjs/common';
import { Eventls } from './entities/event.entity';
import{Image} from'./entities/image.entity'
import { EventService } from './event.service';
import { ApiTags, ApiBearerAuth, ApiParam } from '@nestjs/swagger';
import { Pelayan } from './entities/pelayan.entity';
import { Status } from './entities/status.entity';
import { TpEvent } from './entities/tipe_pelaksanaan_event.entity';
import { KatEvn } from './entities/kategori_event.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from '../event/utils/file-upload.utils';

@ApiTags('Event')
@Controller('event')
export class EventController {
  SERVER_URL:  string  =  "https://event-kppm-sambirejo-api.herokuapp.com/event/show/";
    constructor(private eventService: EventService){}
    @Get()
    async read(): Promise<Eventls[]> {
      return await this.eventService.getEventList();
    }

    @Get('userbyid/:id')
    @ApiParam({ name: 'id' })
     async get(@Param('id') id) {
        return await this.eventService.getEventById(id);
    }

    @Get('geteventbyshowid/:id')
    @ApiParam({ name: 'id' })
     async getEventByShowId(@Param('id') id) {
        return await this.eventService.getEventByShowId(id);
    }

    @Put('update')
    update(@Body() eventls: Eventls) {
        return this.eventService.updateEvent(eventls);
    }

    @Post('save')
    save(@Body() eventls: Eventls) {
        return this.eventService.createEvent(eventls);
    }

    @Get('getpelayan')
    async getpel(): Promise<Pelayan[]> {
      return await this.eventService.getPelayan();
    }

    @Get('getstatus')
    async getstatus(): Promise<Status[]> {
      return await this.eventService.getStatus();
    }

    @Get('gettipe')
    async gettipe(): Promise<TpEvent[]> {
      return await this.eventService.getTipeEvent();
    }

    @Get('getkategori')
    async getkat(): Promise<KatEvn[]> {
      return await this.eventService.getKategori();
    }

    // upload single file
    @Post('uploadimage')
    @UseInterceptors(
      FileInterceptor('image', {
        storage: diskStorage({
          destination: './uploads',
          filename: editFileName,
        }),
        fileFilter: imageFileFilter,
      }),
    )
    async uploadedFile(@Body() image: Image,@UploadedFile() file) {
      image['nama_image']=file.originalname
      image['path']=`${this.SERVER_URL}${file.filename}`
      this.eventService.eventImage(image)
      const response = {
        originalname: file.originalname,
        filename: file.filename,
      };
      return {
        status: HttpStatus.OK,
        message: 'Image uploaded successfully!',
        data: response,
      };
    }

    @Get('show/:imagename')
    getImage(@Param('imagename') image, @Res() res) {
    const response = res.sendFile(image, { root: './uploads' });
    return {
      status: HttpStatus.OK,
      data: response,
    };
  }
}
