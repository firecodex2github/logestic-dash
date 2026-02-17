import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { orderResolver } from './resolvers/order-resolver';

export const routes: Routes = [
    {
        path:'',
        component:Dashboard,
        resolve :{
            orderslist : orderResolver
        }
    }
];
