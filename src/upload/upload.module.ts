import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { OcrModule } from 'src/ocr/ocr.module';

@Module({
  controllers: [UploadController],
  providers: [UploadService],
  imports: [OcrModule],
})
export class UploadModule {}
