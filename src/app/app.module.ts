import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
import { NightDreamsService } from './services/night-dreams.service';
import { ViewDreamModalComponent } from './view-dream-modal/view-dream-modal.component';
import { AddDreamModalComponent } from './add-dream-modal/add-dream-modal.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ViewDreamModalComponent,
    AddDreamModalComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    FormsModule
  ],
  providers: [NightDreamsService],
  bootstrap: [AppComponent],
  entryComponents: [ViewDreamModalComponent, AddDreamModalComponent]
})
export class AppModule { }
