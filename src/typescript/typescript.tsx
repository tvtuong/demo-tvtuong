import {} from 'module';

interface User {
  name: string;
  id: number;
}
class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

interface Point {
  x: number;
  y: number;
}
class VirtualPoint {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
const newVPoint = new VirtualPoint(13, 56);
function logPoint(p: Point) {
  console.log(`${p.x},${p.y}`);
}
const point = { x: 12, y: 26 };
logPoint(point);
logPoint(newVPoint);

export const user: User = new UserAccount('Byo', 1);
export function wrapInArray(obj: string | string[]) {
  if (typeof obj === 'string') {
    return obj;
  }
  return obj;
}
