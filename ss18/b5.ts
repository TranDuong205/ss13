interface ChangeSpeed {
    speedUp(): void;
    slowDown(): void;
    stop(): void;
}

class Vehicle implements ChangeSpeed {
    private speed: number;

    constructor() {
        this.speed = 0;
    }

    speedUp(): void {
        this.speed += 10;
    }

    slowDown(): void {
        if (this.speed >= 10) {
            this.speed -= 10;
        } else {
            this.speed = 0;
        }
    }

    stop(): void {
        this.speed = 0;
    }

    getSpeed(): number {
        return this.speed;
    }
}
let car = new Vehicle();
console.log("Tốc độ ban đầu của xe:", car.getSpeed());

car.speedUp();
console.log("Sau khi tăng tốc độ:", car.getSpeed());

car.slowDown();
console.log("Sau khi giảm tốc độ:", car.getSpeed());

car.stop();
console.log("Sau khi dừng lại:", car.getSpeed());
