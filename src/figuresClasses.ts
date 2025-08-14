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
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be positive numbers');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Invalid triangle sides');
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

  private height: number;

  private width: number;

  constructor(color: string, height: number, width: number) {
    if (height <= 0 || width <= 0) {
      throw new Error('Width and height must be greater than 0');
    }

    this.shape = 'rectangle';
    this.color = color;
    this.height = height;
    this.width = width;
  }

  public getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const area = Math.round(figure.getArea() * 100) / 100;

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
