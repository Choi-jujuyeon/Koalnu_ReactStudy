let initialState = {
    count: 0,
};

//reducer는 함수이며 2개의 매개변수를 가진다.=> store를 바꾸는 역할을 한다
function reducer(state = initialState, action) {
    // console.log("action", action);

    // 행동지침과 같다!
    // if (action.type === "INCREMENT") {
    //     return { ...state, count: state.count + 1 };
    // }
    // return { ...state };
    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count + 1 };
        case "DECREASE":
            return { ...state, count: state.count - 1 };
        default:
            return { ...state };
    }
}
export default reducer;
