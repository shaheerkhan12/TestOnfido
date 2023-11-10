import { Component } from '@angular/core';
import { SdkHandle, init } from 'onfido-sdk-ui';
import { OnInit, VERSION } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-documentverify',
  templateUrl: './documentverify.component.html',
  styleUrls: ['./documentverify.component.scss']
})
export class DocumentverifyComponent {
  name = 'Angular ' + VERSION.major;
  onfido: SdkHandle | any;
  ngOnInit() {}

  initOnfido() {
    this.onfido = init({
      token: environment.token,
      containerId: 'onfido-mount',
      onComplete: (data:any) => {
        console.log('completed',data);
      },

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
      steps: ['welcome', 'document', 'face', 'complete'],
      // steps: ['welcome', 'poa', 'document', 'face', 'complete'],
    })

    addEventListener('userAnalyticsEvent', (event: any) =>
      console.log('event', event.detail)
    );
  }
}
