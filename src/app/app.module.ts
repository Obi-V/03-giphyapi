import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpTestComponent } from './http-test/http-test.component';
import { FormsModule } from '@angular/forms';
import { gifService } from './service/gif.service';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HttpTestComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [gifService],
  bootstrap: [AppComponent]
})
export class AppModule { }
