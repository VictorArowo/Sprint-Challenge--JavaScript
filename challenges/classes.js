// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMakerClass {
    constructor(props) {
        this.length = props.length;
        this.width = props.width;
        this.height = props.height;
    }

    volume() {
        return this.length * this.width * this.height;
    }

    surfaceArea() {
        return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
    }
}


const cuboidClass = new CuboidMakerClass({length: 4, width:5, height: 5});
// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboidClass.volume()); // 100
 console.log(cuboidClass.surfaceArea()); // 130

 
class Cube extends CuboidMakerClass{
     constructor(side){
        super({length: side, width: side,height: side});
     }
}

const cubeClass = new Cube(3);
console.log(cubeClass.volume()); // 100
console.log(cubeClass.surfaceArea()); // 130