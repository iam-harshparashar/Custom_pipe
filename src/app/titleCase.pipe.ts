import { Pipe, PipeTransform} from '@angular/core';


@Pipe({

name: 'case' 

})



export class TitleCasePipe implements PipeTransform{

transform(text: string){



if(!text) return null;
let ans=text.toUpperCase();

// let words = text.split(' ');

// for(var i=0; i<words.length; i++){

// let word = words[i];


// words[i] = word.substr(0,1).toUpperCase() + word.substr(1).toLowerCase();

// }

// return words.join(' ');
return ans;

}




}