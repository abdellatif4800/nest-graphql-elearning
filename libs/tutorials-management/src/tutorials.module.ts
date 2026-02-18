import { DynamicModule, Module } from '@nestjs/common';
import { TutorialsService } from './tutorials.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Unit, Tutorial } from './entities/tutorial.entity';
import { TutorialsAdminResolver } from './tutorials.admin.resolver';
import { TutorialsResolver } from './tutorials.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Tutorial, Unit])],
  providers: [TutorialsService],
})
export class TutorialsModule {
  static register(mode: 'public' | 'admin'): DynamicModule {
    const resolver =
      mode === 'public' ? [TutorialsResolver] : [TutorialsAdminResolver];

    return {
      module: TutorialsModule,
      providers: resolver,
    };
  }
}
