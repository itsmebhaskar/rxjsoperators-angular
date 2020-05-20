import { of, Observable } from 'rxjs'; 
import { map,filter } from 'rxjs/operators';

//map operators
var sequence:Observable<number>=of(1,2,3,4);

sequence.pipe(map((num)=>num*num)).subscribe(res=>{
  console.log(res);
})


//filter operators

var fruits:Observable<string>=of('apple','orange','banana','mango').pipe(filter(fru=>fru.length>4));
