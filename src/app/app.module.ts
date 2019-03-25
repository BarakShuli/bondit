import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './site/login/login.component';
import { MainComponent } from './site/protfolio/main/main.component';
import { HeaderComponent } from './site/protfolio/header/header.component';
import { GridComponent } from './site/protfolio/layouts/grid/grid.component';
import { APIResolver } from './site/protfolio/main/protfolios.resolver';
import { FilterByProtfolioTypePipe } from './pipes/filterByType/filter-by-protfolio-type.pipe';
import { ProtfolioFilterPipe } from './pipes/filterByText/protfolio-filter.pipe';
import { GetUniqeTypeListPipe } from './pipes/getUniqeProtfolioTypeList/get-uniqe-type-list.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProtfolioFilterPipe,
    LoginComponent,
    MainComponent,
    GridComponent,
    HeaderComponent,
    FilterByProtfolioTypePipe,
    GetUniqeTypeListPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [APIResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
