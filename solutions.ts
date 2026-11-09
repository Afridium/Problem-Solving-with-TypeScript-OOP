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

//problem 4
const concatenateArrays = <T>(...array: T[][]): T[] => {
  let newArr: T[] = [];
  for(let i = 0; i < array.length; i++){
    newArr.push(...array[i]);
  }
  return newArr;
}

//problem 5
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
const courses: Course[] = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
];