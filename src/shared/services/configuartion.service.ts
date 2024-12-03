import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ConfiguartionServie {
  @Inject()
  private configServie: ConfigService;

  get mysqlHost() {
    return this.configServie.get<string>('MYSQL_HOST');
  }
  get mysqlPort() {
    return this.configServie.get<number>('MYSQL_PORT');
  }
  get mysqlDB() {
    return this.configServie.get<string>('MYSQL_DB');
  }
  get mysqlUsername() {
    return this.configServie.get<string>('MYSQL_USERNAME');
  }
  get mysqlPassword() {
    return this.configServie.get<string>('MYSQL_PASSWORD');
  }
  get dbConfig() {
    return {
      host: this.mysqlHost,
      port: this.mysqlPort,
      username: this.mysqlUsername,
      password: this.mysqlPassword,
      database: this.mysqlDB,
    };
  }
}
