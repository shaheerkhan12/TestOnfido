import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentverifyComponent } from './documentverify/documentverify.component';

const routes: Routes = [
  { path: "", redirectTo: "document", pathMatch: 'full' },
  {path:'document',component: DocumentverifyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
