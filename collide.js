function collide(object1,object2){
    if(object1.x-object2.x<object2.width/2+object1.width/2 &&
    object2.x-object1.x<object2.width/2+object1.width/2){
  object2.velocityX=0;
  object2.x=1285;
  deformationRed(deformation1,weight1,speed1,car1)
  deformationRed(deformation2,weight2,speed2,car2)
  deformationRed(deformation3,weight3,speed3,car3)
  deformationRed(deformation4,weight4,speed4,car4)
  return true;
}
else {
  return false;
  deformationRed(deformation1,weight1,speed1,car1)
  deformationRed(deformation2,weight2,speed2,car2)
  deformationRed(deformation3,weight3,speed3,car3)
  deformationRed(deformation4,weight4,speed4,car4)
}
}