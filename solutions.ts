//Problem 1

const multiplyValue = (value: number, multiplier?:number) : number =>{
    if(multiplier === undefined){
        return value * 2;
    }else{
        return value * multiplier;
    }
}

//problem 2
const processInput = (value: string | number | boolean): string | number => {
    
    if(typeof value === "string"){
        return value.trim().toLowerCase();
    }else if(typeof value === "number"){
        return value * 10;
    }else if(typeof value === "boolean"){
        if(value === true){
            return "Active";
        }else{
            return "Inactive";
        }
    }
    throw new Error("Invalid input");
}
