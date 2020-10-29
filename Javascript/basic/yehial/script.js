function Car(name_Car, maxSpeed_Car, price, year,color) {
    this.name_Car = name_Car;
    this.maxSpeed_Car = maxSpeed_Car;
    this.price = price;
    this.year = year;
    this.color = color;
  }

  const myCar1 =new Car("Hyundai I20",200,50000,2015,"gray");
  const myCar2 =new Car("Skoda Octavia",240,150000,2020,"gary")
  console.log(myCar1);
  console.log(myCar2);

  const cars=[];

  cars.push(myCar1);
  cars.push(myCar2);
  console.log(cars);

  

