import { of, Observable, from } from 'rxjs'; 
import { map,filter } from 'rxjs/operators';

//map operators
var sequence:Observable<number>=of(1,2,3,4);

sequence.pipe(map((num)=>num*num)).subscribe(res=>{
  console.log(res);
})


//filter operators

var fruits:Observable<string>=of('apple','orange','banana','mango').pipe(filter(fru=>fru.length<6));

fruits.subscribe(res=>{
  console.log(res);
})

//from operators

var cars=from(['volvo','merc','bmw']).subscribe(car=>console.log(car));



//
