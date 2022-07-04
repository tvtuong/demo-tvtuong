export interface Address {
  stress: string;
  number: number;
  zip: string;
}
export interface UserProps {
  name: string;
  age: number;
  country: string;
  address: Address;
  admin: boolean;
}
