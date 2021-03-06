// import component
import { Component, ViewEncapsulation } from '@angular/core';
import { DashboardService, PropertiesService } from '../../services';
import { DashboardModel} from '../../models';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

declare const MktoForms2: any;

@Component({
  selector: 'app-modal',
  styleUrls:  ['./modal.scss?v=${new Date().getTime()}'],
  templateUrl: './modal.html?v=${new Date().getTime()}',
  viewProviders: [DashboardService],
  encapsulation:  ViewEncapsulation.None,
})

// Modal component
export class ModalComponent {
  bestLatencyRegion: any;
  bestBandwidthRegion: any;

  /**
   * constructor Modal component
   */
  constructor(public dialogRef: MdDialogRef<ModalComponent>) {
  }

  /**
   * display survey form
   * [displaySurveyForm description]
   */
  displaySurveyForm() {
  	MktoForms2.loadForm("//app-ab21.marketo.com", "882-LUR-510", 1088);
  	// MktoForms2.loadForm("//app-ab21.marketo.com", "882-LUR-510", 1005);
  }
}