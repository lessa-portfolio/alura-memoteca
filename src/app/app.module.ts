import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewThoughtComponent } from './components/thoughts/new-thought/new-thought.component';
import { FormsModule } from '@angular/forms';
import { ThoughtsListComponent } from './components/thoughts/thoughts-list/thoughts-list.component';
import { AppRoutingModule } from './app-routing.module';
import { PensamentoComponent } from './components/thoughts/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NewThoughtComponent,
    ThoughtsListComponent,
    PensamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
