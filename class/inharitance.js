/*in js we can inharite the property of a class to its another class */
class Animal{
    constructor(name,type){
        this.name=name;
        this.type=type;
    }
    static animal(){
        console.log(`i am ${this.name} i am a ${this.type} animal`);
        
    }
}
class rabit extends Animal{
    constructor(name,type){
        super(name,type);
    }
    intro=()=>{
        console.log(this.name,this.type);
    }
}
rab=  new rabit("rabbit","common");
Animal.animal();