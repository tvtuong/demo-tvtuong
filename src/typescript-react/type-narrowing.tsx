import React from 'react';
import NarrowComponents, { Item } from './narrow-component';

export default function TypeNarrow() {
  const items: Item[] = [
    {
      id: 1,
      type: 'imageItem',
      title: 'A nice sunset',
      imgUrl: 'https://kimlientravel.com.vn/upload/image/sapa/du-lich-sapa-thang-5/hoa-ma-tien-thao-sapa.jpg',
    },
    {
      id: 2,
      type: 'quoteItem',
      quote:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, quam ea. Nisi nulla earum itaque, sapiente exercitationem, laudantium sunt fuga dolores repellendus, expedita dicta. Voluptates minima laboriosam odit reprehenderit magnam!',
    },
  ];
  return <NarrowComponents items={items} />;
}
