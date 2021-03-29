import React, { useContext} from 'react'
import { DataContext } from '../DataContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
  const productrowStyle = 'flex flex-row border-b-2 font-family: tahoma items-center'
  const productinsideStyle = 'flex flex-col py-3 flex-grow '
  const productnameStyle = ' text-left text-sm pl-5 '
  const productdescStyle = ' text-left text-xs  pl-5 '
  const productarrowStyle = 'flex flex-col text-right pr-5 '


  const { mol_id } = props
  const products = useContext(DataContext).state.data.products.filter(product => product.items[mol_id] > 0)
  const { dispatch } = useContext(DataContext);

  function handleProductDeatil(product_id) {
    dispatch({ type: '_detail', productId: product_id })
  }

  return (
    <div>
      { products.map((item) =>
          <div className={productrowStyle} key={item.id} onClick={() => handleProductDeatil(item.id)}>
            <div className={productinsideStyle}>
              <div key='title' className={productnameStyle} >{item.title}</div>
              <div key='desc' className={productdescStyle} >حاوی {item.items[mol_id]} درصد </div>
            </div>
            <div key='arrow' className={productarrowStyle} > <FontAwesomeIcon icon={faChevronRight} /></div>
          </div>
        )
      }

    </div>

  )



}

export default Product
