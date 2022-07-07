import React from 'react';
// import type { RootState } from '../../app/store';
// import { useSelector, useDispatch } from 'react-redux';
// import { decrement, increment, incrementAsync, incrementByAmount, selectCount } from './counterSlice';
// import './styles.scss';

// export const Counter: React.FC = () => {
//   const count = useSelector(selectCount);
//   const dispatch = useDispatch();
//   const [incrementAmount, setIncrementAmount] = React.useState('2');

//   return (
//     <div>
//       <div className="row-class">
//         <button className="button" aria-label="Decrement value" onClick={() => dispatch(decrement())}>
//           -
//         </button>
//         <span className="value">{count}</span>
//         <button className="button" aria-label="Increment value" onClick={() => dispatch(increment())}>
//           +
//         </button>
//       </div>
//       <div className="row-class">
//         <input className="textbox" aria-label="Set increment amount" value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} />
//         <button className="button" onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>
//           Add Amount
//         </button>
//         <button className="asyncButton" onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>
//           Add Async
//         </button>
//       </div>
//     </div>
//   );
// };
