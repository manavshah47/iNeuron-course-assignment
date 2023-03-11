class Cylinder{
    constructor(r,h){
        this.radius = r;
        this.height = h;
    }
    
    getVolume(){
        return parseFloat(Math.PI * this.radius * this.radius * this.height).toFixed(4);
    }
}

let objCylinder = new Cylinder(1,1);
let volumeCylinder = objCylinder.getVolume();
console.log(volumeCylinder);

class Sphere{
    constructor(r){
        this.radius = r;
    }
    
    getVolume(){
        return parseFloat((4 * Math.PI * this.radius * this.radius * this.radius)/3).toFixed(4);
    }
}

let objSphere = new Sphere(1);
let volumeSphere = objSphere.getVolume();
console.log(volumeSphere);


class Cone{
    constructor(r,h){
        this.radius = r;
        this.height = h;
    }
    
    getVolume(){
        return parseFloat((Math.PI * this.radius * this.radius * this.height)/3).toFixed(4);
    }
}

let objCone = new Cone(1,1);
let volumeCone = objCone.getVolume();
console.log(volumeCone);