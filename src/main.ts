import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'node:path';
import { engine } from 'express-handlebars';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  app.engine(
    'hbs',
    engine({
      // 设置文件扩展名为 .hbs
      extname: '.hbs',
      // 配置运行时选项
      runtimeOptions: {
        // 允许默认情况下访问原型属性
        allowProtoPropertiesByDefault: true,
        // 允许默认情况下访问原型方法
        allowProtoMethodsByDefault: true,
      },
    }),
  );
  await app.listen(3000);
}
bootstrap();
