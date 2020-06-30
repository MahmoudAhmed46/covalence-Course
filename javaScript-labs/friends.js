//create array friends
let friends=["Mahmoud","Ahmed","Hassan","Khaled","Yasser"];
for(let name of friends){
    console.log(name+':');
    for(let i=99;i>0;--i){
        if(i!==1)
            console.log(i + ' lines of code in the file, ' + i + ' lines of code; John strikes one out, clears it all out, '+ (i-1) +' lines of code in the file');
        else
        console.log('1 lines of code in the file, 1 lines of code; John strikes one out, clears it all out, no more lines of code in the file');
        }
}