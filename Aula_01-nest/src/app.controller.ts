import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('teste')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  getTeste(): string {
    return this.appService.getTeste();
  }

  @Get(':id')
  getById(@Param() params) {
    return this.appService.getById(params.id);
  }

  @Get('/find/:id')
  getFindByID(@Param() params) {
    return this.appService.getFindById(params.id);
  }

  @Get('/id/:id')
  getById2(@Param('id') id: string) {
    return this.appService.getById(id);
  }

  @Post('/nome/:nome')
  @HttpCode(201)
  postTeste(@Param('nome') nome: string): string {
    return this.appService.postTeste(nome);
  }

  @Post('/nome2/')
  @HttpCode(201)
  postTeste2(@Body() nome: string): string {
    return this.appService.postTeste(nome);
  }

  @Put('/edit/:id')
  putNome(@Param('id') id: string, @Body() body): string {
    return this.appService.putNome(id, body.nome);
  }

  @Delete('/del/:id')
  delNome(@Param('id') id: string): string {
    return this.appService.delNome(id);
  }
}
