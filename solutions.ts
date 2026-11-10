const multiplyValue = (value: number, multiplier?:number) : number =>{
    if(multiplier === undefined){
        return value * 2;
    }else{
        return value * multiplier;
    }
}

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

type location = readonly [latitude: number, longitude: number, locationName: string]
const formatCoordinate = (value: location) => {
    return `Location: ${value[2]} (${value[0]}, ${value[1]})`;
}

const concatenateArrays = <T>(...array: T[][]): T[] => {
  let newArr: T[] = [];
  for(let i = 0; i < array.length; i++){
    newArr.push(...array[i]);
  }
  return newArr;
}

interface Course {
    title: string;
    students: number;
    isPublished: boolean
}
const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
    let popularCourses: Course[] = [];
    for(let i = 0; i < courses.length; i++){
        if(courses[i].students >= minStudents && courses[i].isPublished === true){
            popularCourses.push(courses[i]);
        }
    }
    return popularCourses;
}

const pluckValues = <T, K extends keyof T>(inputs: T[], key: K): T[K][] => {
    const newArr: T[K][] = inputs.map(user => user[key]);
    return newArr;
}

class Employee{
    protected name: string;
    private baseSalary: number;
    constructor(name: string, baseSalary: number){
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails():string{
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee{
    private department: string;
    constructor(name: string, baseSalary: number, department: string){
        super(name,baseSalary);
        this.department = department;
    }
    getRoleInfo():string{
        return `Manager of ${this.department}: ${this.name}`;
    }
}

const validateAgeAsync = async(age: number): Promise<string> => {    
    return new Promise((resolve, reject) => {
      if(age >= 18){
        setTimeout(() => {
            resolve("Access Granted")
        }, 1000)
    }else{
        reject(new Error("Access Denied: Must be 18 or older"))
    }  
    });
}

