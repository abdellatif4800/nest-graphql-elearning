import { Module } from '@nestjs/common';
import { UserApiController } from './user-api.controller';
import { UserApiService } from './user-api.service';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TerminusModule } from '@nestjs/terminus';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TutorialsModule } from 'apiLibs/tutorials-management';
import { join } from 'path';
import { UsersModule } from 'apiLibs/users-managment';
import { FileStorageModule } from 'libs/file-storage/src';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      context: ({ req, res }) => ({ req, res }),
      autoSchemaFile: join(process.cwd(), './schema.gql'),

      sortSchema: true,
    }),

    //-----------------------------------

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('POSTGRES_HOST'),
        port: configService.get<number>('POSTGRES_PORT'), // This handles the number conversion automatically
        username: configService.get<string>('POSTGRES_USER'),
        password: configService.get<string>('POSTGRES_PASSWORD'),
        database: configService.get<string>('POSTGRES_DATABASE'),
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),

    //-----------------------------------

    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    //-----------------------------------

    TerminusModule,

    //-----------------------------------

    UsersModule.register('public'),

    //-----------------------------------

    TutorialsModule.register('public'),

    //-----------------------------------

    FileStorageModule.register('public'),
  ],
  controllers: [UserApiController],
  providers: [UserApiService],
})
export class UserApiModule { }
