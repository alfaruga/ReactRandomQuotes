import classes from "./PageContainer.module.css";
import React from "react";


const pageContainer = (props) => {
    let rand16 = `img${Math.floor(Math.random() * 15) + 1}`
    return (<div className={[classes.PageContainer, classes[rand16]].join(" ")}>{props.children}
    </div>)
}

export default pageContainer;