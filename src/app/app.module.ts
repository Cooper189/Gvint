import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CurrentFieldComponent } from './current-field/current-field.component';
import { FeildBlockComponent } from './feild-block/feild-block.component';
import { InformationComponent } from './information/information.component';
import { RandomPipe } from './pipes/random.pipe';
import { InterceptorService } from './helpers/interceptor.service';
import { LoginComponent } from './login/login.component';
import { GameFieldComponent } from './game-field/game-field.component';
import { CardsImageDirective } from './directives/cards-image.directive';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CurrentFieldComponent,
    FeildBlockComponent,
    InformationComponent,
    RandomPipe,
    LoginComponent,
    GameFieldComponent,
    CardsImageDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
