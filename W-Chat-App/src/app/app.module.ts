import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WHomeComponent } from './w-home/w-home.component';
import { WRegisterComponent } from './w-register/w-register.component';
import { WLoginComponent } from './w-login/w-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChatScreenComponent } from './chat-screen/chat-screen.component';
import { ChatSidebarComponent } from './chat-sidebar/chat-sidebar.component';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { FilterPipe } from './pipes/filter.pipe';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { DeleteContactComponent } from './delete-contact/delete-contact.component';
import { EditDeleteComponent } from './edit-delete/edit-delete.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    WHomeComponent,
    WRegisterComponent,
    WLoginComponent,
    DashboardComponent,
    ChatScreenComponent,
    ChatSidebarComponent,
    FilterPipe,
    EditContactComponent,
    DeleteContactComponent,
    EditDeleteComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
