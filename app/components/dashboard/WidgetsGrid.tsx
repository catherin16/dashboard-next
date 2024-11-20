'use client';
import { SimpleWidget } from './SimpleWidget'
import { IoCartOutline } from 'react-icons/io5'
import { useAppSelector } from '@/app/store'

export const WidgetsGrid = () => {

    const isCart = useAppSelector( state => state.counter.count);
    return (
        <div className="flex flex-wrap p-2 items-center justify-center">
        <SimpleWidget
        subtitle='Productos agregados'
        title={ `${isCart}` }
        label='Contador'
        icon={<IoCartOutline size={50} className='text-blue-600'/>}
        />
    </div>
    )
}
