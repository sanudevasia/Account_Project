import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
//import {MatListModule} from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewformComponent } from './newform/newform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import { ConfirmComponent } from './confirm/confirm.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { TaskdetailsComponent } from './taskdetails/taskdetails.component';
;
import { CommentsComponent } from './comments/comments.component';
import { UpdateComponent } from './update/update.component';
import { FrontdeskComponent } from './frontdesk/frontdesk.component';
import { DialogComponent } from './dialog/dialog.component';
import { MatButton, MatButtonModule } from '@angular/material/button';

import { MatDialogModule } from '@angular/material/dialog';
import { ListdialogComponent } from './listdialog/listdialog.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewformComponent,
    ConfirmComponent,
    TasklistComponent,
    TaskdetailsComponent,
    CommentsComponent,
    UpdateComponent,
    FrontdeskComponent,
    DialogComponent,
    ListdialogComponent,
    HeaderComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    FormsModule,
    MatDividerModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule,
    ToastrModule.forRoot() 
     
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
