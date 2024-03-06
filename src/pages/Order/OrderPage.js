import { useLocation } from 'react-router-dom'
import { Success } from './components/Success'
import { Fail } from './components/Fail'
import { useTitle } from '../../hooks/useTitle'

export const OrderPage = () => {
    useTitle("Order Summary")
    const { state } = useLocation()

    return (
        <main>
            {state.status ? <Success data={state.data} /> : <Fail />}
        </main>
    )
}
