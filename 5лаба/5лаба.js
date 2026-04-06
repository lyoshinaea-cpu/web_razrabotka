console.log("************************************");
function first(num)
{
    return parseInt(num.toString().split('').reverse().join(''))
}
console.log("Первая задача1:  ", first(123));

console.log("************************************");

function second(_num)
{
    let str = _num.toString();
    let result = "";    
    for (let i = 0; i < str.length; i++) 
    {
        if (!result.includes(str[i])) 
        {
            result += str[i];             
        }
    }
    return parseInt(result)
}
console.log("Первая задача2:  ",second(111333456));
    
console.log("************************************");

function third(m, digit) 
{
    let str = m.toString(); 
    let target = digit.toString(); 
    let count = 0; 
    for (let i = 0; i < str.length; i++) 
    {
        if (str[i] === target) 
        {
            count++; 
        }
    }
    return count;
}
console.log("Первая задача3:  ",third(1355567, 5)); 

console.log("************************************");

function fourth(n) 
{
    let binary = n.toString(2); 
    console.log("Двоичная запись:", binary);
    let max = 0; 
    let current = 1; 

    for (let i = 0; i < binary.length; i++) 
    {
        if (binary[i] === binary[i + 1]) 
        {
            current++; 
        } else 
        {
            if (current > max) 
            {
                max = current;
            }
            current = 1; 
        }
    }
    return max;
}
console.log("Первая задача4:  ", fourth(26)); 


console.log("************************************");





function fifth(_n) 
{
    for (let i = 0; i < _n.length; i++) 
    {
        let char = _n[i];
        if (_n.indexOf(char) === _n.lastIndexOf(char)) 
        {
            return char; 
        }
    }
    return "Уникальных символов нет";
}
console.log("Вторая задача1:  ", fifth('фывфавыапрс')); 



console.log("************************************");


function sixth(l) 
{
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < l; i++) 
    {
        let randomIndex = Math.floor(Math.random() * chars.length);
        result += chars[randomIndex];
    }
    return result;
}
console.log("Вторая задача2:  ", sixth(5)); 
console.log("Вторая задача2:  ", sixth(10));



console.log("************************************");


function seventh(lllll) 
{
    let result = "";
    for (let i = 0; i < lllll.length; i++) 
    {
        if (!result.includes(lllll[i])) 
        {
            result += lllll[i]; 
        }
    }
    return result;
}
console.log("Вторя задача3:   ", seventh('позволяеткопироватьтекстиз')); 


