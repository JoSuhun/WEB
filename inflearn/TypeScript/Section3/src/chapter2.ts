// UnKnown
function unknownExam(){
    let a:unknown = 1
    let b:unknown = 'ee'
    let c:unknown = true
    let d:unknown = null
    let e:unknown = undefined
    // UpCasting

    let unknownVar:unknown
    // let num:number = unknownVar  //❗️error     //DownCasting
    // let str:string = unknownVar  //❗️error     //DownCasting
}

// Never
function neverExam(){
    function neverFunc():never {
        while (true) {}
    }       // 공집합이다. 반환할 수 있는 값의 종류가 아무것도 없다.
    let num:number = neverFunc()
    let str:string = neverFunc()

    // let never1:never = 10        //❗️error     //DownCasting
    // let never2:never = 'aa'      //❗️error     //DownCasting
    // let never3:never = true      //❗️error     //DownCasting
}

// void
function voidExam(){
    function voidFunc():void {
        console.log('tt')
    }

    let voidVar:void = undefined
}

// any (치트키 / 타입계층도 완전 무시)
function anyExam(){
    let unknownVar:unknown
    let anyVar:any

    anyVar = unknownVar     // DownCasting 허용. 타입계층도 완전 무시

    let undefinedVar:undefined
    undefinedVar = anyVar     // DownCasting 허용. 타입계층도 완전 무시

    let neverVar:never
    // neverVar = anyVar    //❗️error     //never까지 DownCasting은 안됨.
}