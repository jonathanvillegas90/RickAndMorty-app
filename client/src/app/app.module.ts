import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './utility/card/card.component';
import { HeaderComponent } from './utility/header/header.component';
import { FooterComponent } from './utility/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { CharactersComponent } from './page/characters/characters.component';
import { LocationsComponent } from './page/locations/locations.component';
import { EpisodesComponent } from './page/episodes/episodes.component';
import { HomeComponent } from './page/home/home.component';
import { FiltrosPipe } from './utility/pipes/filtros.pipe';
import { FiltroCharactersPipe } from './utility/pipes/filtro-characters.pipe';
import { FiltroEpisodesPipe } from './utility/pipes/filtro-episodes.pipe';
import { FiltroLocationsPipe } from './utility/pipes/filtro-locations.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    FooterComponent,
    CharactersComponent,
    LocationsComponent,
    EpisodesComponent,
    HomeComponent,
    FiltrosPipe,
    FiltroCharactersPipe,
    FiltroEpisodesPipe,
    FiltroLocationsPipe,
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
