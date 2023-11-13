import { Component } from '@angular/core';
import { SdkHandle, init } from 'onfido-sdk-ui';
import { OnInit, VERSION } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DocumentService } from '../services/document.service';

@Component({
  selector: 'app-documentverify',
  templateUrl: './documentverify.component.html',
  styleUrls: ['./documentverify.component.scss']
})
export class DocumentverifyComponent {
  name = 'Angular ' + VERSION.major;
  onfido: SdkHandle | any;
  _id:string ="applicant_id=d7b348bf-5075-4341-bb0c-44e02f17e4a4";
  token: string = '';
  constructor(private documentService:DocumentService){
    this.tokenGeneration()
  }
  ngOnInit() {}
  tokenGeneration(){
    this.documentService.getOnfidoToken(this._id).subscribe(
      {
        next: (v) => {
          this.token = v.token
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete') 
    })
  }

  initOnfido() {
    this.onfido = init({
      token: this.token,
      containerId: 'onfido-mount',
      onComplete: (data:any) => {
        console.log('completed',data);
      },
      // workflowRunId: '9533fd9d-183a-4a33-a750-beb113462483',
      shouldCloseOnOverlayClick: true,
      useModal: false,
      isModalOpen: true,
      onUserExit: (code:any) => {
        console.log('user exit ', code);
      },
      onError: (e:any) => {
        console.log('error', e);
      },
      onModalRequestClose: (() => {
        console.log('request close');
        this.onfido.setOptions({ isModalOpen: false });
      }).bind(this),
      steps: ['welcome', 
      {
        "type": "document",
        "options": {
          "documentTypes": {
            "driving_licence": {
              "country": "ARE"
            },
            "national_identity_card": {
              "country":"ARE"
            },
            "residence_permit": {
              "country":"ARE"
            },"passport":{
              "country":"ARE"
            }
          }
        }
      }, 'face', 'complete'],
      // steps: ['welcome', 'poa', 'document', 'face', 'complete'],
    })

    addEventListener('userAnalyticsEvent', (event: any) =>
      console.log('event', event.detail)
    );
  }
}
