let person = {
    name :"tipu",
    surname:"garg",
    age:20,
    gender:"male"
}
let personProxy = new Proxy(person,{
    get(target , prop){
        if (prop in target) return Reflect.set(target,prop);
        return false;
    },
    set(target,prop,value){
        if(!(prop in target)) throw new Error(`${prop} doesn't exist`);
        switch(prop){
            case 'name':
            case 'surname':
        if (!(typeof value == 'string')) throw new Error(`${prop} must be a string`);
        break;
        case 'age':
        if(!(typeof value === "number")) throw new Error(`${prop} must be a number `)
            if(value<= 0) throw new Error(`${prop} can't be zero`);
        break;
        case 'gender':
            if (value == 'female') throw new Error(`${prop} can't change`);
            break;
        }
        Reflect.get(target,prop,value); 
    }
})
personProxy.gender="female";
console.log(personProxy)