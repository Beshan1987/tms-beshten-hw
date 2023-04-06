export const fix=''


type SubjectsNames = 'mathematics' | 'biology' | 'geography'| 'chemistry'

type SubjectsDescr = {
    students: number;
    teachers: number;
}

const subjects = {
  mathematics: {
      students: 200,
      teachers: 6
  },
  biology: {
      students: 120,
      teachers: 6
  },
  geography: {
      students: 60,
      teachers: 2
  },
  chemistry: {
      students: 100,
      teachers: 3
  }
}

// Task 1
function getSubjectsNames (subjects: Record<SubjectsNames, SubjectsDescr>): string{
    return Object.keys(subjects).join(', ');
}
console.log(`We study ${getSubjectsNames(subjects)}`)

// Task 2

function getTotalTeachers (subjects: Record<SubjectsNames, SubjectsDescr>): number {
    return Object.values(subjects).reduce((acc , { teachers }) => acc + teachers,
    0)
}

function getTotalStudents (subjects: Record<SubjectsNames, SubjectsDescr>): number {
    return Object.values(subjects).reduce((acc , { students }) => acc + students,
    0)
}

console.log(`${getTotalTeachers(subjects)} teachers are present overall, 
and
${getTotalStudents(subjects)} students are present in total`);

// Task 3

function getAverage (total:number, amount: number): number {
    return Math.round( total / amount )
}

console.log(`The average number of students is ${getAverage(getTotalStudents(subjects), Object.keys(subjects).length)},
with ${getAverage(getTotalTeachers(subjects), Object.keys(subjects).length)} teachers`)

// Task 4 + 5
 
const arraySubjects = Object.entries(subjects).map(([subject,{students, teachers}])=>{
    return {subject, students, teachers}})
    .sort((a, b) => b.teachers - a.teachers)

console.log(`The sorted array in this case is:
`, arraySubjects);
    



