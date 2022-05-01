import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

export const FilesServer = environment.production ? environment.apiUrl : environment.apiUrl;
export const BaseFilesUrl = `${FilesServer}/files/`;
export const UploadFilesAPI = `${FilesServer}/api/Files/`;
export const DownloadFilesAPI = `${FilesServer}/api/Files/DownloadFile/`;
export const DataBaseFolder = 'database';

@Pipe({
  name: 'fullUrl'
})
export class FullUrlPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) { return ''; }
    if (value.startsWith(DataBaseFolder)) {
      const values = value.split('/');
      const id = values[values.length - 1].slice(0, 36);
      return `${DownloadFilesAPI}${id}`;
    }
    return `${BaseFilesUrl}${value}`;
  }

}
