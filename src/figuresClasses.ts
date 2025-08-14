export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: string;

  public color: string;

  private a: number;

  private b: number;

  private c: number;

  constructor(color: string, a: number, b: number, c: number) {
    if (color !== 'red' && color !== 'green' && color !== 'blue') {
      throw new Error('Color must be red, green or blue');
    }

    if (a <= 0) {
      throw new Error('Side a must be greater than 0');
    }

    if (b <= 0) {
      throw new Error('Side b must be greater than 0');
    }

    if (c <= 0) {
      throw new Error('Side c must be greater than 0');
    }

    const sides = [a, b, c].sort((x, y) => y - x);
    const [longest, side2, side3] = sides;

    if (longest >= side2 + side3) {
      throw new Error(
        'The longest side must be less than the sum of the other two sides.',
      );
    }

    this.shape = 'triangle';
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  public getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const underRoot = s * (s - this.a) * (s - this.b) * (s - this.c);
    const area = Math.sqrt(Math.max(underRoot, 0));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: string;

  public color: string;

  private radius: number;

  constructor(color: string, radius: number) {
    if (color !== 'red' && color !== 'green' && color !== 'blue') {
      throw new Error('Color must be red, green or blue');
    }

    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }

    this.shape = 'circle';
    this.color = color;
    this.radius = radius;
  }

  public getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: string;

  public color: string;

  private width: number;

  private height: number;

  constructor(color: string, width: number, height: number) {
    if (color !== 'red' && color !== 'green' && color !== 'blue') {
      throw new Error('Color must be red, green or blue');
    }

    if (height <= 0 || width <= 0) {
      throw new Error('Width and height must be greater than 0');
    }

    this.shape = 'rectangle';
    this.color = color;
    this.width = width;
    this.height = height;
  }

  public getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
