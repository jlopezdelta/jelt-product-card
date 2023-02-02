import { useEffect, useState, useRef } from 'react';
import { InitialValues, OnChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
    product        : Product,
    onChange      ?: ( args : OnChangeArgs ) => void
    value         ?: number,
    initialValues ?: InitialValues
}

export const useProduct = ({ product,  onChange, value = 0, initialValues } : useProductArgs) => {

    const [counter, setCounter] = useState<number>( initialValues?.count || value );

    const isMounted = useRef(false);

    const increaseBy = ( value: number ) => {
        let newValues = Math.max( counter + value, 0 );

        if( initialValues?.maxCount ){
            newValues = Math.min( newValues, initialValues.maxCount ); 
        }
        setCounter( newValues );
        onChange && onChange({ count : newValues, product });
    }

    const reset = ()=>{
        setCounter( initialValues?.count || value)
    }

    useEffect(() => {
        if( !isMounted.current ){return}
        setCounter( value );
    }, [value])
    
    useEffect(() => {
        isMounted.current = true;
    }, [])
    

    return {
        counter,
        isMaxCountReached : !!initialValues?.maxCount && initialValues.maxCount === counter,
        maxCount : initialValues?.maxCount,
        increaseBy,
        reset
    }
 
}
