import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LeavesModule } from './leaves/leaves.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Leaves } from './leaves/leaves.entity';
import { UsersModule } from './users/users.module';
import { Users } from './users/entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [Leaves, Users],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    LeavesModule,
    UsersModule,
   ],
  controllers: [],
  providers: [],
})
export class AppModule {}
