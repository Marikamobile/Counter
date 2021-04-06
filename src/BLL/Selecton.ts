import {AppStateType} from "./store";
//useSelector принимает типизацию только с названием IRootState,
//поэтому мы просто всё копируем из IGlobalState
interface IRootState extends AppStateType{}
//лучше писать через селектор, чем чз mapStateToProps: мы можем применять функцию к возвращаемому значению (фильтр и проч.)
export const selectAllStore = (state: IRootState) => state.reducer