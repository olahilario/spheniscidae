const Dog = {
    message: { banana: ['1','33', '44'],
                pera: ['ameixa', 'uva', 'biscoito'],
                uva: []
    }

}

console.log(Object.keys(Dog))
console.log(Object.keys(Dog.message))
console.log(Object.values(Dog.message))

let loucura = Object.keys(Dog.message)
let arrayValues = Object.values(Dog.message)

const novalista =loucura.reduce((acc, current, index ) => {
    
    acc.push(`${arrayValues[index]} ${current}`)
    return acc
}, [])


console.log(novalista)