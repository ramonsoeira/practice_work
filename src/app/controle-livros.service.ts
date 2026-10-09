import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable()
export class ControleLivrosService {
  private livros: Array<Livro> = [
    { codigo: 1, codEditora: 1, titulo: 'Use a Cabeça: Java', resumo: 'Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (OO) e Java.', autores: ['Bert Bates', 'Kathy Sierra'] },
    { codigo: 2, codEditora: 2, titulo: 'Java, como Programar', resumo: 'Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel.', autores: ['Paul Deitel', 'Harvey Deitel'] },
    { codigo: 3, codEditora: 3, titulo: 'Padrões de Projeto', resumo: 'Soluções reutilizáveis para problemas comuns no desenvolvimento de software orientado a objetos.', autores: ['Erich Gamma', 'Richard Helm', 'Ralph Johnson', 'John Vlissides'] },
  ];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    livro.codigo = this.livros.reduce((maior, atual) => Math.max(maior, atual.codigo), 0) + 1;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const indice = this.livros.findIndex((livro) => livro.codigo === codigo);
    if (indice >= 0) this.livros.splice(indice, 1);
  }
}
