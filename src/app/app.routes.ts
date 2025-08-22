import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path : '',
        loadComponent: () =>
            import('./pages/bienvenida/bienvenida').
        then((archivo) => archivo.Bienvenida)
    },
    {
        path : 'bienvenida',
        loadComponent: () =>
            import('./pages/bienvenida/bienvenida').
        then((archivo) => archivo.Bienvenida)
    },
    {
        path : 'error',
        loadComponent: () =>
            import('./pages/error/error').
        then((archivo) => archivo.Error)
    },
    {
        path : 'login',
        loadComponent: () =>
            import('./pages/login/login').
        then((archivo) => archivo.Login)
    },
    {
        path : 'registro',
        loadComponent: () =>
            import('./pages/registro/registro').
        then((archivo) => archivo.Registro)
    },
    {
        path : 'sobre-mi',
        loadComponent: () =>
            import('./pages/sobre-mi/sobre-mi').
        then((archivo) => archivo.SobreMi)
    },
    {
        path : '**',
        redirectTo : 'error'
    }
];
