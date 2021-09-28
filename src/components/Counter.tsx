import React from "react";
import "./style.css";
import counter from "src/store/counter";
import { observer } from "mobx-react";

const Counter: React.FC = observer(() => (
    <main className="container">
        <h1 className="title">Clicks: {counter.count}</h1>

        <div className="button-group">
            <button onClick={() => counter.increment()} className="button-group__action">
                Increment
            </button>
            <button onClick={() => counter.decrement()} className="button-group__action">
                Decrement
            </button>
        </div>
    </main>
));

export default Counter;
