export class Photo{
    constructor(public id:string,public server:string,public farm:string,public secret:string){
        
    }
    
    get getUrl():string{
        return 'https://farm'+this.farm+'.staticflickr.com/'+this.server+'/'+this.id+'_'+this.secret+'_q.jpg';
    }
}