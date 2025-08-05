class PromiseMine{
    constructor(fn){
        fn(this.resolve,this.reject);
    }
}