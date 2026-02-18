import { Module } from '@nestjs/common';
import { AdminApiController } from './admin-api.controller';
import { AdminApiService } from './admin-api.service';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { TerminusModule } from '@nestjs/terminus';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';
import { TutorialsModule } from 'apiLibs/tutorials-management';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'apiLibs/users-managment';
import { FileStorageModule } from 'libs/file-storage/src';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
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

    UsersModule.register('admin'),

    //-----------------------------------

    TutorialsModule.register('admin'),
    //-----------------------------------

    FileStorageModule.register('admin'),
  ],

  //***********************************

  controllers: [AdminApiController],

  //***********************************

  providers: [
    AdminApiService,
    // {
    //   provide: APP_GUARD,
    //   useClass: AuthGuard,
    // },
    // {
    //   provide: APP_GUARD,
    //   useClass: RoleGuard,
    // },
  ],
})
export class AdminApiModule {}
