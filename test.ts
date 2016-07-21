/**
 * Just some interfaces
 */
class Foo implements Pes {
    foo: number;
    payload:boolean;
}

class Bar implements Pes {
    bar: number;
    payload:string;
}

interface Pes {
    payload:any;
}

/**
 * User Defined Type Guard!
 */
function isFoo(arg: any): arg is Foo {
    return arg.foo !== undefined;
}

/**
 * User Defined Type Guard!
 */
function isPes(arg: any): arg is Pes {
    return arg.foo !== undefined;
}

/**
 * Sample usage of the User Defined Type Guard
 */
// function doStuff(arg: Foo | Bar) {
function doStuff(arg) {
    if (isFoo(arg)) {
        console.log(arg instanceof Foo)
        console.log(arg.bar); // Error!
    }

    // if(isPes(arg)){
    //     console.log(arg.pes); // Error!
    // }

}

doStuff({payload:true});
doStuff({payload:'123'});


// User defined type guard を使う時って、対象の引数に来る可能性のある型を全部ちゃんと宣言しないとダメなんだっけ?


