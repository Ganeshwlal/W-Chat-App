import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(getcontact:[],searchKey:string,propName:string): any[] {
    if(!getcontact||searchKey==""||propName==""){
      return getcontact;
    }

    const result:any=[]
    getcontact.forEach((contact:any)=>{
      if(contact[propName].trim().toLowerCase().includes(searchKey.toLowerCase())){
        result.push(contact);
      }
    })
    return result;
  }

}
