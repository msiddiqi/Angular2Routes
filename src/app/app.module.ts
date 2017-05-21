import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
 
import { AppComponent } from './app.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { ChatComponent } from './chat/chat.component';

import { ChatActivate } from './chat/route-guards/chat-activate'
import { ChatDeActivate } from "app/chat/route-guards/chat-deactivate";
 
const appRoutes : Routes = [
  { path: "componentOne", component: ComponentOneComponent},
  { path: "componentTwo", component: ComponentTwoComponent},
  { 
    path: "chat", 
    component: ChatComponent,
    canActivate: [ChatActivate],
    canDeactivate: [ChatDeActivate]
  }
]
 
@NgModule({
  declarations: [
    AppComponent,
    ComponentOneComponent,
    ComponentTwoComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ 
    ChatActivate,
    ChatDeActivate ],
  bootstrap: [AppComponent]
})
export class AppModule { }