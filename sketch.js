var mic
var vol
var capture
var vol_tint
var amp
var col
var j=[]
function setup(){
  createCanvas(windowWidth,windowHeight)
  mic=new p5.AudioIn()
  mic.start()

  amp=new p5.Amplitude()
  amp.setInput(mic)


  capture=createCapture(VIDEO)
  capture.size(width,height)
  capture.hide()

}

function draw(){
    vol=amp.getLevel()
var img=capture.loadPixels();

image(img,0,0,windowWidth,windowHeight)

  //
   for(i=0;i<width;i++){for(h=0;h<height;h++){
     j = get(i,h)

       if(j[0]+j[1]+j[2]<150) {
         col= color(j[0]+5+vol*1000,j[1],j[2])}

       else if(j[0]+j[1]+j[2]<250) {
         col= color(j[0]+5+vol*1000,j[1]+5+vol*1000,j[2])}

         else if(j[0]+j[1]+j[2]<350) {
           col= color(j[0],j[1]+5+vol*1000,j[2])}

           else if(j[0]+j[1]+j[2]<450) {
             col= color(j[0],j[1]+5+vol*1000,j[2]+5+vol*1000)}

             else if(j[0]+j[1]+j[2]<550) {
               col= color(j[0],j[1],j[2]+5+vol*1000)}

               else if(j[0]+j[1]+j[2]<650) {
                 col= color(j[0]+5+vol*1000,j[1],j[2]+5+vol*1000)}

      else{col= color(j[0],j[1],j[2])}
  set(i,h,col)
   }
   }

  updatePixels()
// tint(255*vol,vol*300,255-vol*300)
}

  function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
