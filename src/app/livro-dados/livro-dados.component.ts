import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Editora } from '../editora';
import { Livro } from '../livro';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrl: './livro-dados.component.css',
  standalone: false,
})
export class LivroDadosComponent implements OnInit {
  public livro: Livro = new Livro();
  public autoresForm: string = '';
  public editoras: Array<Editora> = [];

  constructor(
    private readonly servEditora: ControleEditoraService,
    private readonly servLivros: ControleLivrosService,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
  }

  incluir = (): void => {
    this.livro.autores = this.autoresForm.split(/\r?\n/).map((autor) => autor.trim()).filter(Boolean);
    this.servLivros.incluir(this.livro);
    void this.router.navigateByUrl('/lista');
  };
}
