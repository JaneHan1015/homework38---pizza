/**
 * You need to create various classes.
 * There are 4 classes, and all of them can be ridden.
 * Here is their parent class (superclass).
 */

class Thing {
  currentX: number;
  currentSpeed: number;

  constructor(initialX: number) {
    this.currentX = initialX;
    this.currentSpeed = 0;
  }

  accel(): void {
    console.log("Accelerated");
    this.currentX = this.currentX + this.currentSpeed;
  }

  break(): void {
    console.log("Break!");
    if (this.currentSpeed < 0) {
      this.currentSpeed = 0;
    }
    this.currentX = this.currentX + this.currentSpeed;
  }
}

// NOTE 1. Homework 1
/**
 * Now, you need to create a Bicycle class.
 * The Bicycle class should inherit from "Thing" class,
 * then override accel & break methods.
 * Bicycle currentSpeed shold accelerate by adding currentSpeed + 5,
 * then currentX = currentX + currentSpeed
 * For break method, it should deaccelerate by substracting currentSpeed - 5,
 * then currentX = currentX + currentSpeed
 */

class Bicycle extends Thing {
  accel(): void {
    console.log("Accelerated");
    this.currentSpeed = this.currentSpeed + 5;
    this.currentX = this.currentX + this.currentSpeed;
  }
  break(): void {
    console.log("Break!");
    if (this.currentSpeed < 0) {
      this.currentSpeed = 0;
    }
    this.currentSpeed = this.currentSpeed - 5;
    this.currentX = this.currentX + this.currentSpeed;
  }
}

// NOTE 2. Homework 2
/**
 * Now, you need to create a Car class.
 * The Car class should inherit from "Thing" class,
 * then override accel & break methods.
 * Car shold accelerate by adding currentSpeed * 2 + 5,
 * then currentX = currentX + currentSpeed
 * For break method, it should deaccelerate by substracting currentSpeed / 4 - 3,
 * then currentX = currentX + currentSpeed
 */

class Car extends Thing {
  accel(): void {
    console.log("Accelerated");
    this.currentSpeed = this.currentSpeed * 2 + 5;
    this.currentX = this.currentX + this.currentSpeed;
  }
  break(): void {
    console.log("Break!");
    if (this.currentSpeed < 0) {
      this.currentSpeed = 0;
    }
    this.currentSpeed = this.currentSpeed / 4 - 3;
    this.currentX = this.currentX + this.currentSpeed;
  }
}

// NOTE 3. Homework 3
/**
 * Now, you need to create a Helicopter class.
 * The Helicopter class should inherit from "Thing" class,
 * then override accel & break methods.
 * Also, it has a new property, currentY.
 * Also, it has a new method, fly()
 * Helicopter shold accelerate by adding currentSpeed + 10,
 * then currentX = currentX + currentSpeed
 * For break method, it should deaccelerate by substracting currentSpeed - 8,
 * then currentX = currentX + currentSpeed
 * For fly method, it levitates currentY with constant speed, by adding currentY + 5
 */

class Helicopter extends Thing {
  currentY: number;

  accel(): void {
    console.log("Accelerated");
    this.currentSpeed = this.currentSpeed + 10;
    this.currentX = this.currentX + this.currentSpeed;
  }
  break(): void {
    console.log("Break!");
    if (this.currentSpeed < 0) {
      this.currentSpeed = 0;
    }
    this.currentSpeed = this.currentSpeed - 8;
    this.currentX = this.currentX + this.currentSpeed;
  }
  fly(): void {
    console.log("Fly!");
    this.currentSpeed = this.currentY + 5;
    this.currentY = this.currentY + this.currentSpeed;
  }
}
