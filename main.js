let num = prompt("Upto what number you want to see fabinacco sequence");
 
console.log('Upto ' + num + ' number');

let i,holder;
let pre=1,prepre=0;
for(i=1;i<=num;i++){
   

            if(i==1){

                holder=prepre;
            }

            else if (i==2){
                    holder=pre;
            }

            else {
                    holder=pre+prepre;
                    prepre=pre;
                    pre=holder;
            }

            console.log(holder + '\n');
 }
