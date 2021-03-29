import React, { useContext } from 'react'
import { DataContext } from '../DataContext'
import Molecule from './Molecule'


const MolList = ({category_id}) => {

    const list = useContext(DataContext).state.data.mols.filter(mol =>mol.category_id === category_id ) ;
        
    return list.map((item) => <Molecule key={item.id} mol={item} />)
    
}
export default MolList



