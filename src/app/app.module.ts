import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { SortByDatePipe } from './pipes/sort-by-date.pipe';
import { FormsModule } from '@angular/forms';
import { SearchProductPipe } from './pipes/search-product.pipe';
import { FilterNamePipe } from './pipes/filter-name.pipe';


registerLocaleData(localeFr, 'fr-FR');


@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    SortByDatePipe,
    SearchProductPipe,
    FilterNamePipe
  ],
  imports: [
    MatSliderModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'fr-FR',
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
