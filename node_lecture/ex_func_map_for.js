const a = [1,2,3,4,5];
  
// const b = a.map(function(s) {
//     return s * s;
//  })
b = []
for (i=0 ; i< a.length;i++) {
    b.push(a[i] * a[i])
}
console.log(b); // 출력 : [1, 4, 9, 16, 25]