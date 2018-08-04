import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GridModule } from '@progress/kendo-angular-grid';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GridDemoComponent } from './grid-demo/grid-demo.component';

@NgModule({
    declarations: [
        AppComponent,
        GridDemoComponent
    ],
    imports: [
        BrowserModule,
        GridModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
