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
    }else{
      throw new Error("Invalid input");  
    }
}

//problem 3
type location = readonly [latitude: number, longitude: number, locationName: string]
const formatCoordinate = (value: location) => {
    return `Location: ${value[2]} (${value[0]}, ${value[1]})`;
}
