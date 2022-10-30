import {useSelector, useDispatch} from 'react-redux'
import { increment, decrement, setNumber } from '../../Store/Slices/counterSlice'
import { changeColor } from '../../Store/Slices/colorSlice'

const withMain = Component  => props => {
   
    const store = useSelector((state : any)  => state) //? A 'global' state
    const counter = useSelector((state: any) => state.counter) //? state of specific reducer
    const counterValue = useSelector((state: any) => state.counter.counterValue) //? specific state
    const dispatch = useDispatch()

    const counterActions = {
      increment,
      setNumber,
      decrement,
    }

    const mainActions = {
        store,
        counter,
        counterValue,
        dispatch,
        counterActions,
        changeColor,
        ...props,
        
    }

    return <Component {...mainActions} />
}

export default withMain