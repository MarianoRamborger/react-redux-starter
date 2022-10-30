
import withMain from "./withMain"
import { SectionHeader } from "../../Components"

const Main = ({
  store, counter, counterValue, dispatch,
  counterActions, changeColor
}) => {
    return <div id="main-container">

        <div className="main-inner-div"> 
            <SectionHeader fontSize={28}> Try redux! </SectionHeader>

           
            <div className='main-sec'> 
              <h4> Test the counter </h4>

              <h2 style={{marginTop: 10, marginBottom: 10}}> {counterValue}</h2>

              <div className="btns-div"> 
              

              <button onClick={()=>{dispatch(counterActions.decrement())}}> - </button>

                <button onClick={()=>{
                  dispatch(counterActions.setNumber(0))

                }}> 0 </button >

                <button onClick={()=>{dispatch(counterActions.increment())}}> + </button>
    
    
              </div>
            </div>

            <div className='main-sec'>
              <h4> Test different scopes of state </h4>

              <div className="btns-div"> 
            
                <button onClick={()=>console.log(store)}> Store </button>
                <button onClick={()=>console.log(counter)}> Reducer </button>
                <button onClick={()=>console.log(counterValue)}> State </button>
              </div>

            </div>

            <div className='main-sec'>
              <h4> Test another slice </h4>

              <div className="colors-div"> 
                
                <div className="sync-buttons">
                  <button className="color-btn" 
                  onClick={()=>dispatch(changeColor({
                    backColor: "black",
                    mainColor: "white"
                  }))}> sync </button>

                  <button className="color-btn" 
                  onClick={()=>dispatch(changeColor({
                    backColor: "blue",
                    mainColor: "aliceBlue"
                  }))}> sync </button>

                  <button className="color-btn" 
                  onClick={()=>dispatch(changeColor({
                    backColor: "gold",
                    mainColor: "lemonChiffon"
                  }))}> sync </button>
          
                </div>

                  {/* //? Thunks! */}
                <div className="sync-buttons">
                  <button className="color-btn" 
                  onClick={()=>
                    setTimeout(() => {
                    dispatch(changeColor({
                    backColor: "black",
                    mainColor: "white"
                  }))
                }, 500)
                }
                  > async </button>

                  <button className="color-btn" 
                  onClick={()=>
                    setTimeout(() => {
                    dispatch(changeColor({
                    backColor: "blue",
                    mainColor: "aliceBlue"
                  }))
                }, 500)
                }> async </button>

                  <button className="color-btn" 
                  onClick={()=>
                    setTimeout(() => {
                      dispatch(changeColor({
                      backColor: "gold",
                      mainColor: "lemonChiffon"
                  }))
                }, 500)
                }> async </button>
          
                </div>

                
                
              </div>

              

            

            </div>

        </div>

         
    <style> 
        {`


            #main-container { 
              display: flex;
              flex-flow: column nowrap;
              align-items: center;
              align-content: center;
              background-color: ${store.colors.color};
              
                        
            }
            .main-inner-div {
                width: 1000px;
                min-height: 100vh;
                text-align: center;
                border-width: 0px 1px;
                border-color: #C6C6C6;
                border-style: solid;  
                background-color: ${store.colors.mainColor};
                display: flex;
                flex-flow: column wrap;
                align-items: center;
         
            }

            .btns-div { 
                display: flex;
                flex-flow: row wrap;
                justify-content: space-around;
                align-items: center;
                font-size: 20px;
                width: 300px;
     
            }

            .btns-div button {
              width: 80px;
              height: 30px;
 
            }

            .main-sec {
              height: 160px;
              display: flex;
              flex-flow: column nowrap;
              justify-content: space-around;
            }

            .colors-div {
   
              width: 800px;
              display: flex;
              justify-items: center;
              justify-content: center;
            }

            .sync-buttons {
              width: 250px;
              display: flex;
              flex-flow: row wrap;
              justify-content: space-around;
            }

            .sync-buttons button {
              height: 40px ;
              width: 55px ;
            }
            
            .sync-buttons button:nth-child(1) {
              background-color: whitesmoke;
              border: 1px solid black;
            }

            .sync-buttons button:nth-child(2) {
              background-color: aliceBlue;
              border: 1px solid blue;
            }

            .sync-buttons button:nth-child(3) {
              background-color: lemonChiffon;
              border: 1px solid gold;
            }


            
        `}
    </style>
    </div>
}

export default withMain(Main)
