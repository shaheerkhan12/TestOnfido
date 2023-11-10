import { Component } from '@angular/core';
import { SdkHandle, init } from 'onfido-sdk-ui';
import { OnInit, VERSION } from '@angular/core';

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
      token: 'eyJhbGciOiJFUzUxMiJ9.eyJleHAiOjE2OTk2MjExMzUsInBheWxvYWQiOnsiYXBwIjoiZDdiMzQ4YmYtNTA3NS00MzQxLWJiMGMtNDRlMDJmMTdlNGE0IiwiY2xpZW50X3V1aWQiOiIxYjE5MjBkNS1hZjBiLTQ3NWItYWU4Ny0wNTE1YTY2ZjMyN2IiLCJpc19zYW5kYm94Ijp0cnVlLCJpc19zZWxmX3NlcnZpY2VfdHJpYWwiOnRydWUsImlzX3RyaWFsIjp0cnVlLCJzYXJkaW5lX3Nlc3Npb24iOiI4ZGExNDVjOS01OGUzLTRiYmUtOGYyOC03MjZlNGQ3M2ZhZTUiLCJoYXNfdXNhZ2VfcGxhbiI6ZmFsc2V9LCJ1dWlkIjoicGxhdGZvcm1fc3RhdGljX2FwaV90b2tlbl91dWlkIiwidXJscyI6eyJkZXRlY3RfZG9jdW1lbnRfdXJsIjoiaHR0cHM6Ly9zZGsub25maWRvLmNvbSIsInN5bmNfdXJsIjoiaHR0cHM6Ly9zeW5jLm9uZmlkby5jb20iLCJob3N0ZWRfc2RrX3VybCI6Imh0dHBzOi8vaWQub25maWRvLmNvbSIsImF1dGhfdXJsIjoiaHR0cHM6Ly9hcGkub25maWRvLmNvbSIsIm9uZmlkb19hcGlfdXJsIjoiaHR0cHM6Ly9hcGkub25maWRvLmNvbSIsInRlbGVwaG9ueV91cmwiOiJodHRwczovL2FwaS5vbmZpZG8uY29tIn19.MIGIAkIBRJYTAhzpND19gXzHxYuyrb_VyFBObTCOJ69LsNFILki_pLCcgNbinZvbhXIDCCq4gsnf1nHHLeJ6Dqw94737VI8CQgF_8L3m6YYyMzEGW0qIvc1OLwGggZsi0lkZWyptbhT3csos5ewORn8KSGNI4RV8wBOUXhnrAl_kcRMv4hyKqhJOAg',
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
