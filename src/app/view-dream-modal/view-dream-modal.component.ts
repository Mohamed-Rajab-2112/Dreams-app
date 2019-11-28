import { Component, OnInit } from '@angular/core';
import {DreamOrNightmare} from '../interfaces/dreamOrNightmare.interface';
import {BsModalRef} from 'ngx-bootstrap';

@Component({
  selector: 'app-view-dream-modal',
  templateUrl: './view-dream-modal.component.html',
  styleUrls: ['./view-dream-modal.component.scss']
})
export class ViewDreamModalComponent implements OnInit {
dream: DreamOrNightmare;
  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
    console.log(this.dream);
  }

}
