class Department {
    //protected를 사용한 값은 해당 클래스를 상속받은 클래스에서는 접근할 수 있으나
    //외부에서는 접근할 수 없다.
    constructor(id, n) {
        //public을 사용한 값은 클래스 외부에서도 접근할 수 있다.
        // private employees: string[] = [];
        //private를 사용한 값은 클래스 내부에서만 접근할 수 있다.
        //즉 임의로 class 외부에서 employees[2] = "Amy" 이런식으로 값을 수정할 수 없다.
        //자스에는 지원하지 않는 기능이다.
        this.employees = [];
        this.Departmentid = id;
        this.name = n;
    }
    // constructor(public name: string){
    // }
    //위처럼 constructor에 바로 적어줄 수도 있다. 
    //이 경우 this.name = name 과 같다.
    //이렇게 작성하면 코드가 더 간결해질 수 있다.
    describe() {
        console.log(`Department(${this.Departmentid}) : ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
        //this.Departmentid = "d3"  -> 읽기전용 속성이므로 초기화 이후 수정할 수 없다.
    }
    printEmployeeInformation() {
        console.log(`${this.name} employees are ${this.employees.length}`);
        console.log(this.employees);
    }
}
//상속
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT"); //상속받는 class의 매개변수 가져오기
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id) {
        super(id, "Accounting"); //상속받는 class의 매개변수 가져오기
    }
    addEmployee(name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    }
}
const accounting = new AccountingDepartment("d1");
const it = new ITDepartment("c1", ["Max", "Amy"]);
accounting.addEmployee("Max");
accounting.addEmployee("Bella");
accounting.addEmployee("ryu");
it.addEmployee("Lisa");
it.addEmployee("kim");
accounting.describe();
it.describe();
accounting.printEmployeeInformation();
it.printEmployeeInformation();
