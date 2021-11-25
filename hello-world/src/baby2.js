import React,{useState, useEffect} from "react";

const Baby = (props) =>{
    //把state變成useSate
    const [isGetData,setGetData] = useState(false);
    const [Mom,setMom] = useState("");
    const [isRightDad,setRightDad] = useState(false);

    //把class 的 member function 改成 function中的function
    const ajaxSimulator = () =>{
        setTimeout(()=>{
            setGetData(true);
            setMom("小美");
        },3000)
    }

    const checkDad = () =>{
        if(props.dad==="Chang")
            setRightDad(true)
        else 
            setRightDad(false)
    }

    useEffect(()=>{
        //下面是 componentDidMount
        ajaxSimulator();
        document.getElementById("talk").append('爸!')
        return(()=>{
            /* 下面是 componentWillUnmount */
            document.getElementById("talk").innerHTML="";
        })
    },[]);

    useEffect(()=>{
        //下面是 componentDidMount和componentDidUpdate
        checkDad();
    },[props.dad]);//加入監控的props.dad 

    if(isRightDad===false)
        return(
            <div>他的媽媽是誰不重要</div>
        );
    else if(isGetData===false)
            return(
                <div id="msg">讀取中</div>
            );
    else
        return(
            <div id="msg">他的媽媽是{Mom}</div>
        );
}

export default Baby;