import {Component, OnInit} from '@angular/core';
import {DreamOrNightmare} from './interfaces/dreamOrNightmare.interface';
import {NightDreamsService} from './services/night-dreams.service';
import {BsModalService, BsModalRef} from 'ngx-bootstrap/modal';
import {ViewDreamModalComponent} from './view-dream-modal/view-dream-modal.component';
import {AddDreamModalComponent} from './add-dream-modal/add-dream-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dreams-app';
  allDreamsAndNightmares: DreamOrNightmare[] = [];
  searchedDreamsAndNightmares: DreamOrNightmare[] = [];
  bsModalRef: BsModalRef;

  constructor(private nightDreamsService: NightDreamsService, private modalService: BsModalService) {

  }

  ngOnInit() {
    this._getDreamsAndNightmares();
  }

  private _getDreamsAndNightmares() {
    this.allDreamsAndNightmares = this.nightDreamsService.getDreamsAndNightMares();
    this.searchedDreamsAndNightmares = [...this.allDreamsAndNightmares];
  }

  search(searchText) {
    this.searchedDreamsAndNightmares = this.allDreamsAndNightmares.filter(dream => dream.tag.toLowerCase().startsWith(searchText));
  }

  openViewModal(dream: DreamOrNightmare) {
    this.bsModalRef = this.modalService.show(ViewDreamModalComponent, {
      initialState: {
        dream
      }
    });
  }

  openAddModal() {
    this.bsModalRef = this.modalService.show(AddDreamModalComponent);
  }

}
