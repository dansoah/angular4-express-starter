import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/index';
import { HomeComponent } from './components/home/index';
import { AuthGuard } from './guards/index';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];



export const router = RouterModule.forRoot(appRoutes);
