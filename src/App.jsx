import { useEffect, useState } from 'react';

function App() {
    const initialBalance = localStorage.getItem("balance") ? parseInt(localStorage.getItem("balance")) : 10000;
    const [balance, setBalance] = useState(initialBalance);

    useEffect(() => {
        localStorage.setItem("balance", balance);
    }, [balance]);

    const [bet, setBet] = useState(100);

    const [message, setMessage] = useState("Click the button to start the game!");

    const [result, setResult] = useState(["🎰", "🎰", "🎰"]);
    const [drawtab, setDrawtab] = useState([]);

    const [start, setStart] = useState(false);
    const [startDraw, setStartDraw] = useState(false);
    const [draw, setDraw] = useState(false);

    const fruits = [
      "💯","🍎", "🍏", "🍈", "🍊", "🍌", "🍑","🍍","💯", "🍒", "🍇", "🥭", "🍐", "🍋", "🥝", "🥑", "🍓",
    ];

    const playGame = () => {
        if (balance > bet) {
            if (!startDraw) {
                setBalance(balance - bet);
                setDraw(true);
                setStart(true);
                setStartDraw(true);
        
                let i = 0;
                const interval = setInterval(() => {
                    setMessage("Drawing...");
                    if (i < 10) {
                        let random1 = Math.floor(Math.random() * fruits.length);
                        let random2 = Math.floor(Math.random() * fruits.length);
                        let random3 = Math.floor(Math.random() * fruits.length);
                
                        setDrawtab([fruits[random1], fruits[random2], fruits[random3]]);
                        i++;
                    } else {
                        clearInterval(interval);
                        let random1 = Math.floor(Math.random() * fruits.length);
                        let random2 = Math.floor(Math.random() * fruits.length);
                        let random3 = Math.floor(Math.random() * fruits.length);
                
                        let result = [fruits[random1], fruits[random2], fruits[random3]];
                        setResult(result);
                        setDraw(false);
                        setStartDraw(false);
                    }
                }, 100);
            }
        } else {
            alert("You don't have enough funds in your account");
        }
    };

    useEffect(() => {
        if (start && !draw) {
            if (result[0] === result[1] && result[1] === result[2]) {
                let multiple = Math.floor(Math.random() * 10) + 3;
                setBalance(balance + bet * multiple);
                setMessage("Jackpot! " + bet * multiple + "$");
            } else if (result[0] === result[1] && result[0] === "💯" && result[1] === "💯") {
                let multiple = Math.floor(Math.random() * 6) + 2;
                setBalance(balance + bet * multiple);
                setMessage("You won! " + bet * multiple + "$");
            } else if (result[1] === result[2] && result[1] === "💯" && result[2] === "💯") {
                let multiple = Math.floor(Math.random() * 6) + 2;
                setBalance(balance + bet * multiple);
                setMessage("You won! " + bet * multiple + "$");
            } else if (result[0] === result[2] && result[0] === "💯" && result[2] === "💯") {
                let multiple = Math.floor(Math.random() * 6) + 2;
                setBalance(balance + bet * multiple);
                setMessage("You won! " + bet * multiple + "$");
            } else if (result[0] === result[1] || result[1] === result[2] || result[0] === result[2]) {
                let multiple = Math.floor(Math.random() * 3) + 1;
                setBalance(balance + bet * multiple);
                setMessage("You won " + bet * multiple + "$");
            } else {
                let randommessage = Math.floor(Math.random() * 3);
                if (randommessage === 1) {
                    setMessage("Not this time!");
                } else if (randommessage === 2) {
                    setMessage("Try again!");
                } else {
                    setMessage("Unfortunately!");
                }
            }
        }
    }, [result, start, draw]);

    const changeBet = (value) => {
        if (value === "+") {
            if (bet + 100 < balance) {
                setBet(bet + 100);
            } else {
                alert("You don't have enough funds in your account");
            }
        } else if (value === "-") {
            if (bet > 100) {
                setBet(bet - 100);
            } else {
                alert("You can't bet less than 100$");
            }
        } else {
            alert("Something went wrong");
        }
    };

    return (
        <>
            <main>
                <article>
                    <p>{message}</p>
                    <table>
                        <tbody>
                            <thead>{draw ? drawtab[0] : result[0]}</thead>
                            <thead>{draw ? drawtab[1] : result[1]}</thead>
                            <thead>{draw ? drawtab[2] : result[2]}</thead>
                        </tbody>
                    </table>
                    <button onClick={playGame}>Spin!</button>
                </article>
                <section>
                    <section>
                        <h1>Your balance</h1>
                        <h2>{balance}$</h2>
                    </section>
                    <section>
                        <h1>Bet</h1>
                        <section className={startDraw ? "disable" : ""}>
                            <button onClick={() => changeBet("-")}>-</button>
                            <button>{bet}</button>
                            <button onClick={() => changeBet("+")}>+</button>
                        </section>
                    </section>
                </section>
            </main>
        </>
    );
}

export default App;