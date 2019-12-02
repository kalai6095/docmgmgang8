import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarModule,SidebarNavItemModule,SidebarNavModule,SideBarBodyModule } from '@momentum-ui/angular';
import { TopbarComponent } from './nav/topbar/topbar.component';
import { MenubarComponent } from './nav/menubar/menubar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    MenubarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SideBarModule.forRoot(),
    SidebarNavItemModule,SidebarNavModule,SideBarBodyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
