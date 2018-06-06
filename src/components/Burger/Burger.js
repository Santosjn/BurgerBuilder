import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    // const transformedIngredients = Object.keys(props.ingredients)  
    // .map(
    //     (key, index) => {

    //         const ingredients = [];
    //         for (let i = 0; i < props.ingredients[key]; i++) {
    //             ingredients.push(<BurgerIngredient type={key} key={key + index + i}/>);                
    //         }

    //         return ingredients;
    //     }
    // );

 
    let transformedIngredients = Object.keys(props.ingredients)  
    .map(
        (ingredientKey) => {         
            return [...Array(props.ingredients[ingredientKey])]
            .map(
                (_, i) => {
                    return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />;
                }
            );
          
        }
    )
    .reduce((arr, el) => {       
        return arr.concat(el);
    }, []);
    
   
    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}


export default burger;