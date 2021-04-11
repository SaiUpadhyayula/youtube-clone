import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {VideoDetailComponent} from "./video-detail/video-detail.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'video', component: VideoDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
