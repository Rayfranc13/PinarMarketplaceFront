import{FaMoneyCheckAlt}from 'react-icons/fa'
import {BsFillPersonFill} from 'react-icons/bs'
import{RiFolderHistoryLine} from 'react-icons/ri'

export const userActions=[
    {
            name:'Gestionar Compras',
            icon:<FaMoneyCheckAlt style={{float:'right'}}/>,

    },

    {
        name:'Gestionar Productos',
            icon:<BsFillPersonFill style={{float:'right'}}/>,
    },
    {
        name:'Gestionar Entregas',
        icon:<RiFolderHistoryLine style={{float:'right'}}/>,
    }
]