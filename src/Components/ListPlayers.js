import Players from "./Players"


import CardPlayers from "./CardPlayers"




const ListPlayers=()=>{


    return(
            <div id ="Cards">

            {
                Players.map((el,i,t)=> <CardPlayers el={el}/>)
            }


            </div>



    )
}


export default ListPlayers