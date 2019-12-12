import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import { FormModule,EditableTextfieldModule,InputModule,DataTableModule} from '@momentum-ui/angular';
import {RouterModule} from '@angular/router';
import { routes } from './auth-routing';
@NgModule({
  declarations: [LoginComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,FormsModule,
    ReactiveFormsModule,FormModule,EditableTextfieldModule,InputModule,DataTableModule
  ]
})
export class AuthModule { }
