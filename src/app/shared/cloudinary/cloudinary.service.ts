import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CloudinaryService {

  constructor(private http: HttpClient) { }


  private cloudName = "dzzlrvdsy"
  private uploadPreset = "angular_fire"
  private uploadURL = `https://api.cloudinary.com/v1_1/${this.cloudName}/image/upload`




  uploadImage(file: any) {
    // console.log(file);
    let formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', this.uploadPreset)
    return this.http.post(this.uploadURL, formData)
  }


}
