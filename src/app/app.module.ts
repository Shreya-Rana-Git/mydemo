import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindComponent } from './data-bind/data-bind.component';
import { PipeAppComponent } from './pipe-app/pipe-app.component';
import { ReverseSentencePipe } from './reverse-sentence.pipe';
import { DigitcountPipe } from './digitcount.pipe';
import { DirectAppComponent } from './direct-app/direct-app.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindComponent,
    PipeAppComponent,
    ReverseSentencePipe,
    DigitcountPipe,
    DirectAppComponent
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
