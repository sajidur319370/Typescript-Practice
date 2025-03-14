export type CounterState = {
  count: number;
  status: string;
};

export const initialState: CounterState = {
  count: 0,
  status: "pending",
};
type UpdateCountAction = {
  type: "increment" | "decrement" | "reset";
};
type setStatusAction = {
  type: "setStatus";
  payload: "active" | "inactive";
};
type CounterAction = UpdateCountAction | setStatusAction;
export const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };

    case "decrement":
      return { ...state, count: state.count - 1 };

    case "reset":
      return { ...state, count: 0, status: "Pending" };

    case "setStatus":
      return { ...state, status: action.payload };

    default:
      // eslint-disable-next-line no-case-declarations
      const unhandledActionType: never = action;
      throw new Error(
        `Unhandled action type ${unhandledActionType}.Please double check the counter reducer`
      );
  }
};
