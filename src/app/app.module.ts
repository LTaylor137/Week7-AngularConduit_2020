import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';


// dont think i can add routing unless i convert to components.
// adding routes
// const routes: Routes = [
//   { path: "cats", component: CatComponent },
//   { path: "cats/:breed", component: CatComponent },
//   { path: "dogs", component: DogComponent },
//   { path: "dogs/:breed", component: DogComponent },
// ]; 


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }