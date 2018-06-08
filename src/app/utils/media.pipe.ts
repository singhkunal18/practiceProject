import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'media'
})
export class MediaPipe implements PipeTransform {
  iconPath = '../../../assets/icons/';
  imagesPath = '../../../assets/images/';
  videoPath = '../../../assets/videos/';
  instaImagesPath = '../../../assets/images/insta/';
  mediaDict = [];
    constructor() {
        this.mediaDict['siya']         = this.videoPath + 'siya.mp4';
        this.mediaDict['cool']               = this.imagesPath + 'cool.jpg';
        this.mediaDict['car']                = this.imagesPath + 'car.jpg';
        this.mediaDict['leaf']               = this.imagesPath + 'leaf.jpg';
        this.mediaDict['lighthouse']         = this.imagesPath + 'Lighthouse.jpg';
        this.mediaDict['penguins']           = this.imagesPath + 'Penguins.jpg';
        this.mediaDict['passion']            = this.imagesPath + 'passion.jpg';
        this.mediaDict['locationmap']        = this.imagesPath + 'locationmap.jpg';
        this.mediaDict['portfolio']          = this.imagesPath + 'portfolio.jpg';
        this.mediaDict['bull']               = this.imagesPath + 'bull.jpg';
        this.mediaDict['truck']              = this.imagesPath + 'truck.jpg';
        this.mediaDict['rock']               = this.imagesPath + 'rock.jpg';
        this.mediaDict['boat']               = this.imagesPath + 'boat.jpg';

        this.mediaDict['insta1']             = this.instaImagesPath + 'insta1.JPG';
        this.mediaDict['insta2']             = this.instaImagesPath + 'insta2.JPG';
        this.mediaDict['insta3']             = this.instaImagesPath + 'insta3.JPG';
        this.mediaDict['insta4']             = this.instaImagesPath + 'insta4.JPG';
        this.mediaDict['insta5']             = this.instaImagesPath + 'insta5.JPG';
        this.mediaDict['insta6']             = this.instaImagesPath + 'insta6.JPG';
        this.mediaDict['insta7']             = this.instaImagesPath + 'insta7.JPG';
        this.mediaDict['insta8']             = this.instaImagesPath + 'insta8.JPG';
        this.mediaDict['insta9']             = this.instaImagesPath + 'insta9.JPG';
        this.mediaDict['insta10']            = this.instaImagesPath + 'insta10.JPG';
        this.mediaDict['insta11']            = this.instaImagesPath + 'insta11.JPG';
        this.mediaDict['insta12']            = this.instaImagesPath + 'insta12.JPG';
        
        }
  transform(value: any, args?: any): any {
       if (value.toLowerCase() in this.mediaDict) {
          return this.mediaDict[value.toLowerCase()];
      }
    return null;
  }

}
