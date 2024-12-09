import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Modal } from 'bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import WaveSurfer from 'wavesurfer.js';
declare var $;

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent implements OnInit, AfterViewInit {
  @ViewChild('exampleModal') modalElement!: ElementRef;
  @ViewChild('confirmationModal') confirmModalElement!: ElementRef;
  @ViewChild('waveform', { static: true }) waveformRef!: ElementRef;
  wavesurfer!: WaveSurfer;
  showWaveForm: boolean = false
  toggleSideSection: boolean = true;
  agentList = [{ initials: 'AS', name: "Aeris Appointment", role: "Appointment Setter" },
  { initials: 'QC', name: "Quin Caller", role: "Customer Support" },
  { initials: 'LD', name: "Lexi Digital Markit", role: "Game NPC" },
  { initials: 'AA', name: "Aeris Appointment", role: "Appointment Setter" },
  { initials: 'AS', name: "Aeris Appointment", role: "Appointment Setter" },
  { initials: 'QC', name: "Quin Caller", role: "Customer Support" },
  ];
  phoneNumber: string = "+91-98728-53533";
  url: string = "2b62b2b1-283c-4b76-b7cc-c9e";
  title: string = "Amar AI Clinic agent";
  editMode: boolean = false;
  silencetimeout = 30;
  responseDelay = 1;
  LLMRequestDelay = 1;
  interruptionThreshold = 1.5;
  maximumDuration = 1800;
  maxIdleMessages = 7;
  idleTimeout = 6;

  constructor(private toastr: ToastrService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.wavesurfer = WaveSurfer.create({
      container: this.waveformRef.nativeElement,
      waveColor: '#d9dcff',
      progressColor: '#4353ff',
      barWidth: 2,
      cursorColor: '#4353ff',
      height: 40,
    });
    this.wavesurfer.load('assets/audio/sample.mp3');
    this.wavesurfer.on('ready', () => {
      console.log('Waveform is ready!');
    });
  }
  togglePlayPause() {
    $('#showWaveform').css('display', 'flex');
    $('#showSelectOption').css('display', 'none');
    this.wavesurfer.playPause();
  }
  ngAfterViewInit(): void {
    this.openModal();
  }
  openModal() {
    const modal = new Modal(this.modalElement.nativeElement, {
      backdrop: 'static', // Prevents modal from closing on backdrop click
      keyboard: false     // Prevents modal from closing on Esc key
    });
    modal.show();
  }
  publish(){
      const modal = new Modal(this.confirmModalElement.nativeElement, {
        // backdrop: 'static', // Prevents modal from closing on backdrop click
        // keyboard: false     // Prevents modal from closing on Esc key
      });
      modal.show();
  }
  closeConfirm(option: string){
    if(option==='No'){
      this.confirmModalElement.nativeElement.close()
    }
  }

  toggleEdit() {
    this.editMode = !this.editMode;
  }

  saveTitle(event: any) {
    this.title = event.target.textContent.trim();
    this.toggleEdit();
  }

  copyPhoneNumber() {
    const inputElement = document.createElement('textarea');
    inputElement.value = this.phoneNumber;
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    document.body.removeChild(inputElement);
    // this.spinner.show();
    this.toastr.success(`Phone number copied: ${this.phoneNumber}`);
  }

  copyURL() {
    const inputElement = document.createElement('textarea');
    inputElement.value = this.url;
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    document.body.removeChild(inputElement);
    this.toastr.success(`URL copied: ${this.url}`);
  }

}