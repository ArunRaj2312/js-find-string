var val=prompt("enter your name");
var find=prompt("enter find value");
var f=[];
var j=0;
for(i=0;i<val.length;i++){
    if(find==val[i]){
        f[j]=val[i];
        j++;
    }
}
console.log(f.length);