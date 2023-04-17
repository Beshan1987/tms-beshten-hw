export const fix=''

interface User {
    name: string,
      phone: string,
      email: string,
      animals?: string[],
      cars?: string[],
      hasChildren: boolean,
      hasEducation: boolean
}

const users: User[] = [
    {
      name: "Harry Felton",
      phone: "(09) 897 33 33",
      email: "felton@gmail.com",
      animals: ["cat"],
      cars: ["bmw"],
      hasChildren: false,
      hasEducation: true
      
    },
    {
      name: "May Sender",
      phone: "(09) 117 33 33",
      email: "sender22@gmail.com",
      hasChildren: true,
      hasEducation: true
    },
    {
      name: "Henry Ford",
      phone: "(09) 999 93 23",
      email: "ford0@gmail.com",
      cars: ["bmw", "audi"],
      hasChildren: true,
      hasEducation: false
    }
  ]


  // task 1
  function getUserNames (obj:User[]) {
    return obj.map(a => a.name).join(', ')    
  }
  console.debug(getUserNames(users))
  
  // task 2
    function hasCars (obj:User): obj is User & {cars: string[]}   {
    return !!obj.cars;
  }
  function getCarsNumber (obj:User[]): number {
    return obj.filter(hasCars).map(a => a.cars).reduce((acc, current) => acc + current.length, 0);    
  }
  console.debug(getCarsNumber(users))

  // task 3
  function hasEducation (obj: User[]){
    return obj.filter(a => a.hasEducation === true).map(a => a.name).join(', ');    
  }
  console.debug(hasEducation(users))


  // task 4
  function hasAnimal (obj: User[]){
    return obj.filter(a => a.animals).map(a => a.name).join('');    
  }  
  console.debug(hasAnimal(users))

  // task 5
  function getCars (obj: User[]){
    return obj.filter(hasCars).map(a => a.cars).join(',')
  }
  console.debug(getCars(users))
  