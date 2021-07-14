var num=1634, rem,sum=0;

while(num>0){
    rem=num%10;
    sum=sum+(rem*rem*rem)
    num=parseInt(num/10);
}
console.log(sum);