var students=[
    ["aju",50],["aby",90],["ram",66],["steniya",97],["aswathi",92]
]
var avgmark=0;
for(let i=0;i<students.length;i++){
    avgmark+=students[i][1]/5

}
console.log(avgmark);

if(avgmark>=90){
    console.log("A+");
}
else if(avgmark>=80){
    console.log("A");
}
else if(avgmark>=70){
    console.log("B+");
}
else if(avgmark>=60){
    console.log("B");
}


//console.log(students[1]);