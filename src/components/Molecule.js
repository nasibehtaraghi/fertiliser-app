import React, { useContext } from 'react'
import { DataContext } from '../DataContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

import Product from './Product'


const Molecule = ({mol}) => {

    const molrowStyle = 'grid grid-cols-6  border font-family: tahoma items-center'
    const molcol1Style = 'text-center text-green-700 bg-green-100 py-2 '
    const molcol2Style = 'text-left pl-5 py-2 col-span-4 text-green-700 '
    const molarrowStyle = 'text-right py-2 pr-5  '

    const { dispatch } = useContext(DataContext);

    function handleExpandMol(molId) {
        dispatch({ type: '_expand' , expandId: molId})

    }

    return (<>
                <div key={mol.id} className={molrowStyle} onClick={() => handleExpandMol(mol.id)} >
                    <div key='formul' className={molcol1Style}>{mol.formula}</div>
                    <div key='title' className={molcol2Style}>{mol.title}</div>
                    <div key='arrow' className={molarrowStyle}>
                        {   mol.expand ?
                                <FontAwesomeIcon icon={faChevronDown} />
                                :
                                <FontAwesomeIcon icon={faChevronUp} />
                        }

                    </div>
                </div>
                <div>
                     {mol.expand && <Product mol_id={mol.id}/> }
                </div>
                </>
    )
}
export default Molecule



