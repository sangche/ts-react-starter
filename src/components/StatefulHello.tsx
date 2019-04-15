import * as React from "react";
import "./Hello.css";

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

interface State {
  currentEnthusiasm: number;
}

class Hello extends React.Component<Props, State> {
  state = { currentEnthusiasm: this.props.enthusiasmLevel || 1 };

  onIncrement = () =>
    this.setState((state: State) => ({
      currentEnthusiasm: state.currentEnthusiasm + 1
    }));
  onDecrement = () =>
    this.setState(({ currentEnthusiasm }: State) => ({
      currentEnthusiasm: currentEnthusiasm - 1
    }));

  render() {
    const { name } = this.props;

    if (this.state.currentEnthusiasm <= 0) {
      throw new Error("You could be a little more enthusiastic. :D");
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(this.state.currentEnthusiasm)}
        </div>
        <button onClick={this.onDecrement}>-</button>
        <button onClick={this.onIncrement}>+</button>
      </div>
    );
  }
}

export default Hello;

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join("!");
}
