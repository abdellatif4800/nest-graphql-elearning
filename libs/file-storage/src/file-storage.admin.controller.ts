import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import type { Express } from 'express';
import { FileStorageService } from './file-storage.service';

@Controller('files')
export class FileStorageAdminController {
  constructor(private fileStorageService: FileStorageService) { }

  //---------------Buckets-----------------------
  @Post('createBuckt')
  async createBucket(@Body('bucketName') bucketName: string) {
    return this.fileStorageService.createBuckt(bucketName);
  }

  @Get('listBuckets')
  bucketsList() {
    return this.fileStorageService.bucketsList();
  }
  @Post('makeBucketPublic/:bucketName')
  makeBucketPublic(@Param('bucketName') bucketName: string) {
    return this.fileStorageService.makeBucketPublic(bucketName);
  }

  @Post('uploadFile')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body('bucketName') bucketName: string,
    @Body('fileName') fileName: string,
  ) {
    return this.fileStorageService.uploadFile(file, bucketName, fileName);
  }
}
