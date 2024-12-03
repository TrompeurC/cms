import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfiguartionServie } from './services/configuartion.service';
import { User } from './entities/user.entity';
import { UserService } from './services/user.service';

@Global()
@Module({
  providers: [ConfiguartionServie, UserService],
  exports: [ConfiguartionServie, UserService],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfiguartionServie],
      useFactory(configuartion: ConfiguartionServie) {
        return {
          ...configuartion.dbConfig,
          type: 'mysql',
          logging: true,
          autoLoadEntities: true,
          synchronize: true,
        };
      },
    }),
    TypeOrmModule.forFeature([User]),
  ],
})
export class SharedModule {}
