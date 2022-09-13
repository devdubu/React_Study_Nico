import Button from "./Button";
import styles from "./App.module.css";
import {useState, useEffect }from "react";

/*
* useState는 지속적으로 계속 Re Rendering 이 된다.
* 그렇기 때문에 지속적으로 api 호출을 하는 오류를 발생한다.
* 쓸데 없는 api를 지속적으로 요청하는 경우는 불필요성을 가지고 있다.
* */


function App() {

    const [counter , setCounter] = useState(0);
    const [keyword, setKeyword] = useState("");

    const onClick = ()=> setCounter((prev) => prev + 1);
    const onChange = (event) => setKeyword(event.target.value);

    console.log("i run all the time")//버튼을 클릭하면 지속적으로 Re Rendering이 된다.
    const iRunOnlyOnce = () =>{
        console.log("i run only once.");
    };
    useEffect(() => {
        if(keyword !== "" && keyword.length>5){
            console.log("I search for" + keyword);
        }
    }, [keyword]);
    /*
    * 마지막은 지켜보는 변수는 배열이기 때문에 여러가지 변수를 넣을 수도 있다.
    * 만약 여러 가지를 넣는다면, or 로 작동하여, 한가지 만이라도 변화가 이루어진다면,
    * useEffect가 작동된다.
    * 
    * */


    //keyword가 변화할 때 useeffect가 작동된다.

    //button을 누르면 검색이 나오면 안되고, input이 변화 할 때만, console.log가 뜨게끔 하려고 한다.
    
    useEffect(iRunOnlyOnce, []);
  return (
    <div className="App">
        <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."/>
        <h1>{counter}</h1>
        <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
