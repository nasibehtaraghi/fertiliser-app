import React,{useContext} from 'react'
import { DataContext } from '../DataContext'
import MolList from './MolList'
import ProductDetail from './ProductDetail'

const Category =(props)=>{

    const categoryStyle ='flex items-start p-4 font-bold text-left text-gray-700 bg-gray-100 py-2 '
    const {state} = useContext(DataContext)
    const categoryList = state.data.categories

    if(state.showid>-1)
        return <ProductDetail product_id={state.showid} />

    return (
         categoryList.map(category => (
             <div key={category.id}>
                <div className={categoryStyle}>
                    {category.title} 
                </div>
                <MolList category_id={category.id} />
            </div>

        ))
    )
}
export default Category



