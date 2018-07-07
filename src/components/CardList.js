import React from 'react'
import Card from './Card';

const CardList = ({robots}) =>{
    //kiedy uzywam loop w react powinno sie dac uniqueKey zeby nie zmeinic calego vDOM w pewnych przypadkach
    //dodatkowo key nie powinien sie zmienac wiec index jako key nie jest najlepszym pomyslem
    // const cardsArray=robots.map((user, index)=>{
    //     return (
    //     <Card key={robots[index].id} 
    //     id={robots[index].id} 
    //     name={robots[index].name} 
    //     email={robots[index].email} 
    //     />
    //     )
    // })

    return (
        // <div>
        //    {cardsArray}
        // </div>
        <div>
        {
            robots.map((user, index)=>{
            return (
                <Card key={robots[index].id} 
                id={robots[index].id} 
                name={robots[index].name} 
                email={robots[index].email} 
                />
            )
            })
        }
        </div>
    )
}
export default CardList;