import { Component, ReactNode } from "react";

type CounterClassProps = {};

type CounterClassState = {
    count: number;
};

// Composant "Counter" de type "class"
class CounterClass extends Component<CounterClassProps, CounterClassState> {

    backupTitle!: string

    //? Utilisation du constructeur (Init State)
    constructor(props: CounterClassProps) {
        super(props);

        //? Initialisation du "State"
        this.state = {
            count: 0
        };

        //? Lien entre la méthode et du context de la classe (Binding Oldschool)
        this.handleIncr = this.handleIncr.bind(this);
    }

    //? Effet : Montage
    componentDidMount(): void {
        // -> (Restore Title)
        this.backupTitle = document.title;

        // -> (Display Count)
        document.title = `Count : ${this.state.count}`;
    }

    //? Effet : Update
    componentDidUpdate(_prevProps: Readonly<CounterClassProps>, _prevState: Readonly<CounterClassState>, _snapshot?: any): void {
        // -> (Display Count)
        document.title = `Count : ${this.state.count}`;
    }

    componentWillUnmount(): void {
        // -> (Restore Title)
        document.title = this.backupTitle;
    }


    //? Méthode pour l'action "+ 1" (Binding Oldschool)
    handleIncr() {
        this.setState(state => ({
            count: state.count + 1
        }));
    }

    //? Méthode pour l'action "- 1" (Binding ...)
    handleDecr = () => {
        this.setState(state => ({
            count: state.count - 1
        }));
    };

    //? Méthode pour gérer le rendu
    render(): ReactNode {

        return (
            <div>
                <p>Counter Fct : {this.state.count}</p>
                <button onClick={this.handleIncr}>+ 1</button>
                <button onClick={this.handleDecr}>- 1</button>
            </div>
        );
    }
}

export default CounterClass;