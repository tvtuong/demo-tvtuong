import DataGrid from './data-grid';

export default function Generic() {
  const users = [
    { id: 1, name: 'Tuong', age: 25 },
    { id: 2, name: 'Hop', age: 22 },
    { id: 3, name: 'Quoc', age: 24 },
  ];
  const orders = [
    { id: 1, quantity: 5, amount: 75 },
    { id: 2, quantity: 2, amount: 20 },
    { id: 3, quantity: 1, amount: 40 },
  ];
  return (
    <div className="m-2">
      <DataGrid items={users} />
      <br />
      <DataGrid items={orders} />
    </div>
  );
}
