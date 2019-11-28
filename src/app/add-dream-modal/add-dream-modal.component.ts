import {Component, OnInit} from '@angular/core';
import {NightDreamsService} from '../services/night-dreams.service';
import {BsModalRef} from 'ngx-bootstrap';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-dream-modal',
  templateUrl: './add-dream-modal.component.html',
  styleUrls: ['./add-dream-modal.component.scss']
})
export class AddDreamModalComponent implements OnInit {
  dream = {};

  constructor(private nightDreamsService: NightDreamsService, public bsModalRef: BsModalRef) {
  }

  ngOnInit() {
  }

  saveDream(dream) {
    this.nightDreamsService.saveDreamOrNightmare(dream);
    this.closeModal();
  }

  closeModal() {
    this.bsModalRef.hide();
  }

}
