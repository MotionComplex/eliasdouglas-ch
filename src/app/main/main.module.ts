import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatMenuModule, MatNavList, MatListModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { CovalentLayoutModule } from '@covalent/core/layout';

import { MainRouterModule } from './main-router';
import { MainComponent } from './main.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
    declarations: [
        MainComponent,
        NavigationComponent
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatCheckboxModule,
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        MatListModule,
        CovalentLayoutModule,

        MainRouterModule
    ],
    exports: [
        MainComponent
    ],
    providers: [],
})
export class MainModule {}