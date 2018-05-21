import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MainModule } from './main/main.module';

export const ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'main',
        loadChildren: () => MainModule
    }
]

@NgModule({
    declarations: [],
    imports: [ 
        CommonModule,
        RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [],
    providers: [],
})
export class AppRouterModule {}