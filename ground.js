class Ground{

    constructor(){

        var options={
            isStatic:false,
            friction:0.4
        }
      this.body = Bodies.rectangle(500,700,1100,20,options);
      World.add(world, this.body);
    }
    display(){

      rectMode(CENTER);
      fill("brown");
      rect(500,625,1200,20);
    
    }

}