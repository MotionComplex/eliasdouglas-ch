import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatMenuModule, MatNavList, MatListModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentStepsModule  } from '@covalent/core/steps';
import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRouterModule } from './router';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './main/navigation/navigation.component';
import { MainComponent } from './main/main.component';
import { MainModule } from './main/main.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbdCarouselGallery } from './home/ngbd-carousel/ngbd-carousel';
import { ContentBoxComponent } from './shared/content-box/content-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NgbdCarouselGallery,
    ContentBoxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
    NgbModule.forRoot(),

    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
