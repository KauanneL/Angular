import { Component } from '@angular/core';

@Component({
  selector: 'app-calcula-media',
  imports: [],
  templateUrl: './calcula-media.html',
  styleUrl: './calcula-media.scss',
})

export class CalculaMedia {

  protected mediaParcial: number | undefined
  protected mediaFinal: number | undefined
  protected situacao: string

  constructor() {
    this.mediaParcial = undefined
    this.mediaFinal = undefined
    this.situacao = ''
  }

  calcularMediaParcial( b1: number, b2: number, b3: number, b4: number) 
  {
    this.mediaParcial =
      (b1 * 2 + b2 * 2 + b3 * 3 + b4 * 3) / 10

    this.mediaFinal = undefined

    if (this.mediaParcial >= 60) {
      this.situacao = 'Aprovado'
    } else {
      this.situacao = 'Avaliação Final'
    }
  }

  calcularMediaFinal(nf: number) {

    if (this.mediaParcial !== undefined) {

      this.mediaFinal =
        (this.mediaParcial + nf) / 2

      if (this.mediaFinal >= 60) {
        this.situacao = 'Aprovado'
      } else {
        this.situacao = 'Reprovado'
      }
    }
  }
}