import React from 'react';
import { Card } from 'antd';
import classes from "./Category.module.css"


const Category = (props) => {
    return (
      <div className={classes.Category}>
        <h2>{props.catName}</h2>
                <img className={classes.catImg} src={props.catPhoto} width="100" height="100"></img>
      </div>
    );
  };
  
  export default Category;