import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  produtos : string[] = []
  menuType:string = ""


    constructor(){
      this.produtos = [
        "Produto 1",
        "Produto 2",
        "Produto 3",

      ]
    }

    adicionar(){
      this.produtos.push("Victor")

    }

    remover(){
      this.produtos.pop()
    }

    remover2(index: number){
      this.produtos.splice(index, 1)
    }
    }



