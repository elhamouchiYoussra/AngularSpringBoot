import {NbComponentStatus, NbGlobalPhysicalPosition, NbToastrService} from '@nebular/theme';
import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class TosterService {


  constructor(  private toastrService: NbToastrService) {}

  showToast(type: NbComponentStatus, title: string, body: string) {

    const config = {
      status: type,
      destroyByClick: true,
      duration: 10000,
      hasIcon: true,
      position: NbGlobalPhysicalPosition.TOP_RIGHT,
      preventDuplicates: false,
    };
    const titleContent = title ? `${title}` : '';

    this.toastrService.show(
      body,
      `${titleContent}`,
      config);
  }

}
