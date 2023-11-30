const add = (a,b) => a + b;
console.log(add(1,2));

const student = {
    name: 'Chaithanya',
    age: 22,
    gender: 'Male',
    getDetails(){
        console.log(`Hi, Iam ${this.name}. Iam a ${this.age} year old ${this.gender} student`)
    }
}

student.getDetails();