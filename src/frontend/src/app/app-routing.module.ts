import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DemoComponent} from './page/demo/demo.component';

const routes: Routes = [
  {path: '**', component: DemoComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
