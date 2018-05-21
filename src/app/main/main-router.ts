import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

export const MAIN_ROUTES: Routes = [
    {
        path: '',
        component: MainComponent
    }   
]

@NgModule({
    declarations: [],
    imports: [ 
        CommonModule,
        RouterModule.forChild(MAIN_ROUTES)
    ],
    exports: [
        RouterModule
    ],
    providers: [],
})
export class MainRouterModule {}