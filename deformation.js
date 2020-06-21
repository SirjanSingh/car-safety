function deformationRed(deformation,weight,speed,car){
    deformation=(0.5*weight*speed*speed)/22500;
if(deformation>180){
  car.shapeColor="red";
}
else if(deformation>=100&&deformation<=180){
    car.shapeColor="yellow";
}
else if(deformation<100){
    car.shapeColor="green";
}
}