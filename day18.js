let a = 4
let b = 7
let c
let d
let i

c = b * a

if (a > b){
    i = b * b
} else {
    i = a * a
}
d = c % i

c = c - d

c = c / i

console.log(a,"*",a,"=",c, "1*1 =",d)