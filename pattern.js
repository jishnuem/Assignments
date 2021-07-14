var row = 5;
let string="";
for (let i = 1; i <= row; i++) {
  for (j = 1; j <= i; j++) {
    string+="*";
  }
  string+="\n";
}
console.log(string);