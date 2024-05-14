//complete this code
class Rectangle {
	constructor(width, height) {
		this.width = width
		this.height = height
	}
	getWidth() {
		return this.width
	}
	getHeight() {
		return this.height
	}
	getArea() {
		return this.width*this.height
	}
}

class Square extends Animal {
	constructor(side) {
		this.side = side
	}
	getArea() {
		return this.side*this.side
	}
	getPerimeter() {
		return 4 * this.side
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
