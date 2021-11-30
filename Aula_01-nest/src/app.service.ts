import { Injectable } from '@nestjs/common';
const lista = [];
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getTeste(): string {
    return 'nosso teste';
  }

  getById(id) {
    return `o ID passado foi: ${id}`;
  }

  getFindById(id) {
    return lista[id];
  }

  postTeste(nome) {
    lista.push(nome);
    return 'cadastrado com sucesso';
  }

  putNome(id, nome) {
    console.log(nome);
    lista[id] = nome;
    return 'atualizado com sucesso';
  }

  delNome(id) {
    delete lista[id];
    return 'deletado com sucesso';
  }
}
