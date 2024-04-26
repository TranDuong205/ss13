/**
    interface: giao diện
    dùng để định nghĩa các thuộc tính và phương thức các lớp con kế thừa bắt buộc phải triển khai
    ==> cũng gikoongs như abstract
    - có những điểm gì khác nhau so với abstract
    - để tạo abstract thì dùng từ kháo abstract
    - để tạo interface thì dùng interface
    -trong interface sẽ gồm có thuộc tính vaf phương thưucs
    -đối với phương thức thì ko có phần thân tức là nó chỉ đinhj nghĩa thôi
    - đối với interface thì ko thể dùng kiểu kết hợp ( union và intersectioon) được như đối vs type
    ==> ko thể khởi tạo đối tượng từ interface được
    interface sinh ra nhằm mục đichs gì 
    interface là 1 cái khuôn mẫu cho các class kế thừa phải tuân theo
    - các class con khi kế thừa interface bắt buộc phải triển khai tất cả các thuộc tính và phương thưcs
    của interface
    1 class cos the trien khai dc nhieu interface
    1 interfaqce co the ke thua interface
    - trong interface thi ko the dat access modifier
        
 */
interface Sales{
    name: string;
    sale():string;
}
interface Sales1{
    name:string,
    address:string
}
class Person implements Sales{
    name:string;
    constructor(name:string){
        this.name=name
    } 
    sale():string{
        return "giam gia 5%";
    }
}
type A={
    name:string,
}

type B={
    name:string;
    age:number
}
// khi dùng type có thể dùngcacs kiểu kết hợp đc ko 
let name1: A;
