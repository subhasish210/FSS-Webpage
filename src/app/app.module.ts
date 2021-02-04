import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
// import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardsComponent } from './cards/cards.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MAT_LABEL_GLOBAL_OPTIONS, MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { GoogleMapsModule } from '@angular/google-maps';
import { AgmCoreModule } from '@agm/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavbarComponent } from './navbar/navbar.component';


const material=[MatToolbarModule,MatCardModule, 
  MatButtonModule,MatTabsModule,MatIconModule,MatSidenavModule,
  MatListModule];
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CarouselComponent,
    CardsComponent,
    ContactUsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,GoogleMapsModule,
    AppRoutingModule,BrowserModule, FormsModule, NgbModule, BrowserAnimationsModule,material,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDGn3az1MN9qCN48zJANQy5IAWM8mZnDZk'
    })
  ],
  exports:[material],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


  
 