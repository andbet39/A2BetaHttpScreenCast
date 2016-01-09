import {Component} from 'angular2/core';
import {Http,HTTP_PROVIDERS} from 'angular2/http'
import {Control} from 'angular2/common'
import 'rxjs/Rx' 
import {Photo} from './Photo'


@Component({
    selector: 'my-app',
    templateUrl:'./templates/photosearch.html'
})
export class AppComponent { 
   
    searchStr:string;
    API_KEY:string = "e397e7163ac378374bc4a39ba11f8bbd";
    photos:Array<Photo>=[];
    
    constructor(public http:Http){
       
    }
    
    searchPhoto(){
         
         console.log ("Photo search :" + this.searchStr);
        
         var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&&api_key='
                  +this.API_KEY+'&text='+ this.searchStr+'&format=json&nojsoncallback=1';
        
         this.http.get(url)
                .map(res => res.json())
                .subscribe( 
                    data => { 
                        this.photos=[];
                        data.photos.photo.forEach(photo =>{
                            this.photos.push(new Photo(photo.id,photo.server,photo.farm,photo.secret));
                        })
                       
                    },
                    err => {console.log (err)}
                    );
     
    }
    
}


