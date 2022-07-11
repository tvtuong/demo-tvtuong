import React from 'react';

const LOAD = 'redux-form-examples/account/LOAD';

const reducer = (state = {}, action: { type: any; data: any }) => {
  switch (action.type) {
    case LOAD:
      return {
        data: action.data,
      };
    default:
      return state;
  }
};
export const load = (data: any) => ({ type: LOAD, data });

export default reducer;
