import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './utility/card/card.component';
import { BagComponent } from './utility/bag/bag.component';
import { HeaderComponent } from './utility/header/header.component';
import { FooterComponent } from './utility/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { CharactersComponent } from './page/characters/characters.component';
import { LocationsComponent } from './page/locations/locations.component';
import { EpisodesComponent } from './page/episodes/episodes.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    BagComponent,
    HeaderComponent,
    FooterComponent,
    CharactersComponent,
    LocationsComponent,
    EpisodesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
