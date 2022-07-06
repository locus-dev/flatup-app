import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import People from '@material-ui/icons/People'

export const SideBarData = [
    {
        title: "Página Inicial",
        link: "/home"

    },
    {
        title: "Imóveis",
        icon: <HomeIcon />,
        link: "/ListarImoveis"

    },
    {
        title: "Usuários",
        icon: <People />,
        link: "/ListarUsuarios"

    }
]   
  