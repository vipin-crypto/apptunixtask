import { Component } from '@angular/core';

@Component({
  selector: 'apptunix-component',
  templateUrl: './apptunix.component.html',
  styleUrls: ['./apptunix.component.scss']
})
export class ApptunixComponent {

  fileList = new Array<any>();
  current: any;

 
  fileupload(event, i) {
    let self = this;
    this.current = event[0];
    var reader = new FileReader();
    reader.onloadend = function() {
      self.fileList.push(reader.result);
    };
    reader.readAsDataURL(this.current);
  } 

  deleteImage(i){
    this.fileList[i] = null;
    const itemIndex = this.fileList.indexOf(null);
    if (itemIndex > -1) {
      this.fileList.splice(itemIndex, 1);
    }
   }
}
