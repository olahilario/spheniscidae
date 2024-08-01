const Dog = {
    message: { banana: ['1','33', '44'],
                pera: ['ameixa', 'uva', 'biscoito'],
                uva: []
    }

}

// console.log(Object.keys(Dog))
// console.log(Object.keys(Dog.message))
// console.log(Object.values(Dog.message))

const lista = Object.values(Dog.message)

console.log(lista)

for (let item of lista){
        if (item.length > 0){
            for (let n = 0; n < item.length-1; n+=1){
                console.log(Object.keys(Dog.message)[n])
            }
        }else{
            console.log(Object.keys(Dog.message))
        }
    }