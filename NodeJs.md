# Object

```javascript 
    let c = {
        Name : "Infosys",
        Address : "Banglore"
    } 
```Results

> typeof(c)
'object'
> console.log(c)
{ Name: 'Infosys', Address: 'Banglore' }
undefined
>
>
> c
{ Name: 'Infosys', Address: 'Banglore' }
> function add(num1, num2){
...     return num1+num2;
... }
```

# Function

```js
function add(num1, num2){
    return num1+num2;
}
```Results

> let x = 20;
undefined
> let y =45;
undefined
> add(x,y)
65
```

# String

```js
let z = "welcome to infosys";
let q = "This is a nodejs training";
let r = ['Infosys','Bengaluru'];
```Results
//Concatenation
> z+" "+q
'welcome to infosys This is a nodejs training'
> z+" "+r
'welcome to infosys Infosys,Bengaluru'
>z.split(' ')
[ 'welcome', 'to', 'infosys' ]
>z.split('')
[
  'w', 'e', 'l', 'c', 'o',
  'm', 'e', ' ', 't', 'o',
  ' ', 'i', 'n', 'f', 'o',
  's', 'y', 's'
]
> r.join(' ');
'Infosys Bengaluru'
```