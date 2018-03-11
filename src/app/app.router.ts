import { Routes, RouterModule } from '@angular/router';
import { Bai1ServiceComponent } from './bai1-service/bai1-service.component';
import { HomeComponent } from './home/home.component';
const routing: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bai-1', component: Bai1ServiceComponent }
]

export const appRoutes = RouterModule.forRoot(routing);
