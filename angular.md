# Requisitos
- Node e NPM (nodejs.org)

- Visual studio code
    - Angular Language service
    - auto close tag
    - auto rename tag
    - tema 
    - vscode icons
    - editorConfig, prettier. eslint
- angular
    - npm install -g @angular/cli








# criar componentes no angular

### tem que fazer a importação
    import { component} from '@angular/core';

    @component({
        selector: 'menu-component',
        template: '<h2>Edson</h2>,
        style:['h2{color:blue}'],

    })
    export class MenuComponente {

    }

### tem que declarar no arquivo app.component.html.

        <menu-component></menu-component>

### tem que declarar no arquivo app.module.ts

        import { MenuComponent} from './components/menu.component'

        @NgModule({
            declarations: [MenuComponent],
        })

### interporlação de dados

    export class Button {
        buttonText: string = 'acessar';
    }

### adicionar no html

    <button>{{ buttonText}}</button>


### data binding = associação de dados.



