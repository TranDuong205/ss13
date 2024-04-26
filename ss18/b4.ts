interface Geometry{
    calculateArea():void;
    calculatePerimeter():void;
}
class Circle implements Geometry {
    private radius:number;
    constructor(radius:number){
        this.radius=radius;
    }
    calculateArea(): number {
        return Math.PI * this.radius**2
    }
    calculatePerimeter(): number {
        return 2*Math.PI*this.radius
    }
}
class Rectangle implements Geometry{
    private width:number;
    private height:number;
    constructor(width:number,height:number){
        this.width=width;
        this.height=height
    }
    calculateArea(): void {
        console.log("dien tich hinh chu nhat")
    }
    calculatePerimeter(): void {
        
    }
}
 