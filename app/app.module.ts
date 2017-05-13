import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { appRoutes }        from './app.routing';
import { AppComponent}      from './app.component';
import { HomeComponent}     from './home.component';
import { AboutComponent}    from './about.component';
import { ContactComponent}  from './contact.component';

@NgModule({
    imports: [
        BrowserModule,
        appRoutes
        ],
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent
        ],
    bootstrap: [AppComponent]
})
export class AppModule{

}