import './App.css';

function App() {
    return (
        <div id="whole">
            <div id="screen">
            </div>
            <div id="inpField">
                <input type="number" id="inp1" className="inpShow"></input>
                <input type="number" id="inp2" className="inpShow"></input>
            </div>
            <div id="btnField">
                <button className="inpBtn" onClick={activate}>+</button>
                <button className="inpBtn" onClick={activate}>-</button>
                <button className="inpBtn" onClick={activate}>x</button>
                <button className="inpBtn" onClick={activate}>÷</button>
                <div className="inpStyle"></div>
                <div className="inpStyle"></div>
                <div className="inpStyle"></div>
                <div className="inpStyle"></div>
            </div>
        </div>
    );
}

export default App;

function activate() {
    let btns = document.getElementsByTagName('button');
    btns[0].addEventListener(`click`, () => makeCalc(0));
    btns[1].addEventListener(`click`, () => makeCalc(1));
    btns[2].addEventListener(`click`, () => makeCalc(2));
    btns[3].addEventListener(`click`, () => makeCalc(3));
}

function makeCalc(calcType) {
    document.getElementById("screen").innerHTML = "";
    let usrChoice = document.querySelectorAll(".inpShow");
    let res;
    let textNode = document.createElement("p");
    switch (calcType) {
        case 0:
            res = Number(usrChoice[0].value) + Number(usrChoice[1].value);
            break;
        case 1:
            res = Number(usrChoice[0].value) - Number(usrChoice[1].value);
            break;
        case 2:
            res = Number(usrChoice[0].value) * Number(usrChoice[1].value);
            break;
        case 3:
            res = Number(usrChoice[0].value) / Number(usrChoice[1].value);
            break;
    }
    textNode.innerText = res;
    document.getElementById("screen").appendChild(textNode);
}