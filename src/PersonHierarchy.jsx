import "./PersonHierarchy.css";


class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Hello, my name is ${this.name}.`;
  }
}


class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  introduce() {
    return `Hello, my name is ${this.name} and I'm studying ${this.major}.`;
  }
}


class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  introduce() {
    return `Hello, my name is ${this.name} and I teach ${this.subject}.`;
  }
}

function PersonHierarchy() {
  const person = new Person("Alex Johnson", 30);
  const student = new Student("Emma Watson", 20, "Computer Science");
  const teacher = new Teacher("Dr. James Wilson", 45, "Mathematics");

  return (
    <div className="container">
      <h1>Person Class Hierarchy</h1>

      {}
      <div className="card">
        <h2>{person.name} (Person)</h2>
        <p>Age: {person.age}</p>
        <p className="intro">{person.introduce()}</p>
      </div>

      {}
      <div className="card">
        <h2>{student.name} (Student)</h2>
        <p>Age: {student.age}</p>
        <p className="intro">{student.introduce()}</p>
        <p>Major: {student.major}</p>
      </div>

      {}
      <div className="card">
        <h2>{teacher.name} (Teacher)</h2>
        <p>Age: {teacher.age}</p>
        <p className="intro">{teacher.introduce()}</p>
        <p>Teaching: {teacher.subject}</p>
      </div>
    </div>
  );
}

export default PersonHierarchy;
