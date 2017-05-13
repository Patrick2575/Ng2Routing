import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent}     from './home.component';
import { AboutComponent}    from './about.component';
import { ContactComponent}  from './contact.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent}
];

export const appRoutes: ModuleWithProviders = RouterModule.forRoot(routes);