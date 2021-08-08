import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MsgsController } from './msgs.controller';
import { MsgsService } from './msgs.service';
import { MsgSchema } from './schemas/msg.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Msg', schema: MsgSchema}])],
  controllers: [MsgsController],
  providers: [MsgsService],
})
export class MsgsModule {}