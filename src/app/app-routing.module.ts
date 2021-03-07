import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MenuComponent } from './components/menu/menu.component';
import { GameComponent } from './components/game/game.component';
import { MarcadorComponent } from './components/marcador/marcador.component';


const routes: Routes = [
    { path: 'home', component: MenuComponent },
    { path: 'game', component: GameComponent },
    { path: 'marcador', component: MarcadorComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
