import {} from 'module';

interface ImageItem {
  id: number;
  type: 'imageItem';
  title: string;
  imgUrl: string;
}

interface QuoteItem {
  id: number;
  type: 'quoteItem';
  quote: string;
}

export type Item = ImageItem | QuoteItem;

interface ComponentProps {
  items: Item[];
}

export default function NarrowComponents({ items }: ComponentProps) {
  return (
    <ul>
      {items.map((item) => {
        if (item.type === 'imageItem')
          return (
            <li key={item.id}>
              {item.title && <p>{item.title}</p>}
              {item.imgUrl && <img style={{ maxWidth: '15rem' }} src={item.imgUrl} alt={item.title} />}
            </li>
          );
        else return <li key={item.id}>{item.quote && <p style={{ fontSize: 'italic' }}>{item.quote}</p>}</li>;
      })}
    </ul>
  );
}
