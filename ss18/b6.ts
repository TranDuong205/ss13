// Abstract class:
// Một abstract class là một lớp mà không thể tạo ra các thực thể từ nó. Nó thường chứa các phương thức trừu tượng (abstract methods) mà các lớp con phải triển khai.
// Abstract class có thể chứa cả các phương thức đã được triển khai (non-abstract methods) và các thuộc tính.
// Một lớp con kế thừa từ abstract class cần phải triển khai tất cả các phương thức trừu tượng của abstract class đó.
abstract class Shape {
    abstract calculateArea(): number;
}

class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

let circle = new Circle(5);
console.log("Diện tích của hình tròn là:", circle.calculateArea());
// Interface:
// Một interface là một tập hợp các phương thức và thuộc tính mà một đối tượng có thể triển khai. Nó chỉ định các hành vi mà một lớp cần phải cung cấp.
// Các lớp không kế thừa từ interface, mà chúng triển khai (implement) các phương thức và thuộc tính được định nghĩa trong interface đó.
interface Animal {
    makeSound(): void;
}

class Dog implements Animal {
    makeSound(): void {
        console.log("Gâu gâu!");
    }
}

let dog = new Dog();
dog.makeSound();
