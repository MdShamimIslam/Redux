import { connect } from "react-redux";
import { decrement, increment } from "../redux/counter/actions";
import { decrement as dynamicDecrement, increment as dynamicIncrement } from "../redux/dynamicCounter/actions";


 function VariableCounter({count,increment,decrement,dynamic}) {

    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            {
                dynamic ? <h2>Dynamic Counter</h2> : <h2>Normal Counter</h2>
            }
            <div className="text-2xl font-semibold">{count}</div>
            <div className="flex space-x-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                    onClick={increment}
                >
                    Increment
                </button>
                <button
                    className="bg-red-400 text-white px-3 py-2 rounded shadow"
                    onClick={decrement}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}


const mapStateToProps = (state,ownProps) => {
    return {
        count : ownProps.dynamic ? state.dynamicCounter.value : state.counter.value
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        increment : ownProps.dynamic ? () => dispatch(dynamicIncrement(5)) : () => dispatch(increment()),
        decrement : ownProps.dynamic ? () => dispatch(dynamicDecrement(5)) : () => dispatch(decrement()),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(VariableCounter);
