import { add, addObject, checkIsAdult, divideByZero, forEach, Users } from '..';
import axios from 'axios';

describe('Unit Test', () => {
  it('add two number', () => {
    expect(add(2, 2)).toBe(4);
  });
  it('check obj', () => {
    expect(addObject(2, 2)).toEqual({ a: 2, b: 2 });
  });
  it('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });
  it('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });
  it('Phep cong 2 voi 2', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });
  //String
  it('Khong co ky tu I', () => {
    expect('team').not.toMatch(/I/);
  });
  //Arrays
  it('Co chuoi abc', () => {
    expect('Sabcdasdas').toMatch(/abc/);
  });
  const alphabets = ['a', 'b', 'c', 'xxx', 'yyy'];

  it('alphabets co chua xxx', () => {
    expect(alphabets).toContain('xxx');
  });

  it('Thuc thi ham divideByZero bi loi', () => {
    expect(() => divideByZero()).toThrow();
    expect(() => divideByZero()).toThrow(Error);

    // Hoặc bạn có thể so sánh chính xác message lỗi hoặc dùng regex
    expect(() => divideByZero()).toThrow('Ban khong duoc phep chia cho 0');
    expect(() => divideByZero()).toThrow(/khong/);
  });
  //Testing Asynchronous Code
  it('kiem tra truong thanh thanh cong', () => {
    return checkIsAdult(20).then((data) => {
      expect(data).toBe('Da tren 18, an ngon nhoe');
    });
  });
  // it('kiem tra truong thanh that bai', () => {
  //   expect.assertions(1);
  //   return checkIsAdult(13)
  //     .catch((e:any) => expect(e.message)
  //     .toMatch('Chua an duoc, can than boc lich'));
  // });
  it('kiem tra truong thanh thanh cong voi resolves', () => {
    return expect(checkIsAdult(20)).resolves.toBe('Da tren 18, an ngon nhoe');
  });
  // it('kiem tra truong thanh that bai voi rejects', () => {
  //   return expect(checkIsAdult(13))
  //       .rejects
  //       .toEqual(new Error('Chua an duoc, can than boc lich'));
  // });
  //Async/Await
  it('kiem tra async truong thanh thanh cong', async () => {
    const data = await checkIsAdult(20);
    expect(data).toBe('Da tren 18, an ngon nhoe');
  });
  // it('kiem tra async truong thanh that bai', async () => {
  //   expect.assertions(1);
  //   try {
  //     await checkIsAdult(13);
  //   } catch (e: any) {
  //     expect(e.message).toMatch('Chua an duoc, can than boc lich');
  //   }
  // });
  it('kiem tra async truong thanh thanh cong voi resolves', async () => {
    await expect(checkIsAdult(20)).resolves.toBe('Da tren 18, an ngon nhoe');
  });
  // it('kiem tra async truong thanh that bai voi rejects', async () => {
  //   await expect(checkIsAdult(13))
  //       .rejects
  //       .toEqual(new Error('Chua an duoc, can than boc lich'));
  // });
});

//Setup and Teardown
beforeAll(() => console.log('1 - beforeAll'));
afterAll(() => console.log('1 - afterAll'));
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));
describe('Scoped / Nested block', () => {
  beforeAll(() => console.log('2 - beforeAll'));
  afterAll(() => console.log('2 - afterAll'));
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));
  test('', () => console.log('2 - test'));
});

//Mock Functions
describe('Mock Functions', () => {
  it('test foreach', () => {
    const mockCallback = jest.fn((x) => 42 + x);
    forEach([0, 1], mockCallback);
    // mock function được gọi 2 lần
    expect(mockCallback.mock.calls.length).toBe(2);
    // tham số thứ nhất của lần gọi đầu tiên là 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);
    // tham số thứ nhất của lần gọi thứ 2 là 1
    expect(mockCallback.mock.calls[1][0]).toBe(1);
    // giá trị trả về của lần gọi đầu tiên là 42
    expect(mockCallback.mock.results[0].value).toBe(42);
  });
  it('test mock return value', () => {
    const filterTestFn = jest.fn();
    filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);
    // ở đây filterTestFn sẽ trả về true ở lần gọi đầu và false ở lần gọi thứ 2
    const result = [11, 12].filter((num) => filterTestFn(num));
    console.log(result);
    // [11]
    console.log(filterTestFn.mock.calls);
    // [ [11], [12] ]
  });
  jest.mock('axios');
it('fetch users thanh cong', () => {
  const users = [{name: 'Tan'}];
  const resp = {data: users};
  axios.get('/users.json').then(resp => resp.data);
  return Users.all().then(data => expect(data).toEqual(users));
});
});

const myMock = jest.fn();
const a = new myMock();
const b = {};
const bound = myMock.bind(b);
bound();
console.log('my Mock', myMock.mock.instances);
