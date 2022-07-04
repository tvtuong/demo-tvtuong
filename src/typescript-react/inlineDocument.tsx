import React from 'react';

interface Address {
  stress: string;
  number: string;
  zip: string;
  suite: string;
}

interface Props {
  address: Address;
}

export function InlineDocumentationTS({ address }: Props) {
  return (
    <>
      <p>
        {address.number} {address.stress}
      </p>
      <p>{address.zip}</p>
      <p>{address.suite}</p>
    </>
  );
}
