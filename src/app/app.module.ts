import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './modules/shared/shared.module';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeadFeaturedComponent } from './components/head-featured/head-featured.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, MenuComponent, FooterComponent, HeadFeaturedComponent],
  imports: [
    HttpClientModule,
    // Add .withServerTransition() to support Universal rendering.
    // The application ID can be any identifier which is unique on
    // the page.
    NgbModule,
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    TransferHttpCacheModule,

    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      {
        path: 'speakers',
        loadChildren: () =>
          import('./modules/speakers/speakers.module').then(
            m => m.SpeakersModule
          )
      }
    ]),
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
