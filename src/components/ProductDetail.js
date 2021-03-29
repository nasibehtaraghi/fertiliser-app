import React,{useContext} from 'react'
import { DataContext } from '../DataContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'

const ProductDetail =({product_id})=>{
    const productStyle ='flex flex-col mb-16 p-4 text-right space-y-8 '
    const productTitle ='flex flex-col p-4 text-2xl italic  text-right space-y-8 '
    const backStyle ='text-left m-2'

    const product = useContext(DataContext).state.data.products[product_id]
    const { dispatch } = useContext(DataContext);

    function handleBackToMol() {
        dispatch({ type: '_back' })

    }
    
    return (
            <>
                <div key='_back' className={backStyle} onClick={() => handleBackToMol()}>
                    <FontAwesomeIcon icon={faArrowCircleLeft} pull="left" size="lg"/> بازگشت  
                </div>
                <div >
                    <div key='_title' className={productTitle}>
                        {product.title} 
                    </div>
                    <div key={product.id} className={productStyle}>
                        {product.description} 
                    </div>
                </div>
            </>
    )
}

export default ProductDetail