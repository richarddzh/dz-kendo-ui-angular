import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridDemoComponent } from './grid-demo/grid-demo.component';

const routes: Routes = [
    { path: '', redirectTo: 'grid-demo', pathMatch: 'full' },
    { path: 'grid-demo', component: GridDemoComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
