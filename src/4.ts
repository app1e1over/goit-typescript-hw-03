class Key{
    private signature:number;
    constructor(){
        this.signature = Date.now()+Math.random();
    }
    public getSignature():number{
        return this.signature;
    }
}

class Person{
    constructor(private key:Key){}
    getKey():Key{
        return this.key;
    }
}

// Дім (House): Створіть абстрактний клас House. Цей клас має дві властивості: door, яка може бути відкрита (true), або закрита (false), і key, яка зберігає об'єкт класу Key. 
//У цьому класі також повинен бути метод comeIn, який додає об'єкт класу Person у масив tenants, якщо door відкрита. Ваш абстрактний клас House також повинен мати абстрактний метод 
//OpenDoor, який приймає об'єкт класу Key.

// Мій будинок (MyHouse): Створіть клас MyHouse, який успадковується від абстрактного класу House. Реалізуйте метод openDoor у цьому класі. 
// Якщо ключ, переданий цьому методу, збігається з ключем, збереженим як key, то двері відчиняються.

// Після реалізації всіх класів створіть об'єкти для кожного класу та спробуйте відтворити сценарій, в якому людина приходить додому.

abstract class House{
    public door : "open"|"closed"
    protected key: Key;
    public tenants:Person[];

    constructor(k:Key){

        this.key = k;
    }

    comeIn(visitor:Person){
        if(this.door==="open"){
            console.log("NO YOU DON'T!!!");
        }else{
            this.tenants.push(visitor);
            console.log("WELCoME?");
        }
    }

    openDoor(k:Key):boolean{
        return false;
    };
}

class MyHouse extends House{

    constructor(k:Key){
        super(k);
        this.tenants=[];
        this.door="closed";
    }



    openDoor(k:Key):boolean{
        if(k.getSignature()===this.key.getSignature()){
            if(this.door==="open"){
                console.log("it is already open");
                return false;
            }
            console.log("open successfuly");
            this.door = "open";
            return true;
        }
        console.log("You jam the key into tiny hole hole, and although it fits, you can't turn it. Seems like the key doesn't fit.");

        return false;
    };
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};