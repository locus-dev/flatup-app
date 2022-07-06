import React from 'react'
import '../SideBar/css/SideBar.css';
import { SideBarData } from './SideBarData'

function SideBar() {
    return (
        <div className='Sidebar'>
            <ul className='SidebarList'>
                {SideBarData.map((val, key) => {
                    return (

                        <li
                            key={key}
                            className="row"
                            id={window.location.pathname === val.link ? "active" : ""}
                            onClick={() => { window.location.pathname = val.link }}>

                            <div id="icon">{val.icon}</div>
                            <div id="title">
                                {val.title}
                            </div>
                        </li>
                    )
                })}
            </ul>
            <div className="flex justify-center" id="cards">

                <div className="rounded-lg shadow-lg bg-white max-w-sm m-2 hover:shadow-blue-500 " id="cardPersonagem">
                    {/* <a href="#!">
                        <img className="rounded-t-lg" src="https://th.bing.com/th/id/OIP.ocP2uvz-I12ALwGTXMXItAHaEK?w=329&h=185&c=7&r=0&o=5&pid=1.7" alt="" />
                    </a> */}
                    <div className="p-6">
                        <h5 className="text-gray-900  font-medium mb-2 text-3xl">Imóveis</h5>
                        <p className="text-gray-700 text-9xl mb-4">

                        </p>

                    </div>
                </div>
                <div className="rounded-lg shadow-lg bg-white max-w-sm m-2 hover:shadow-blue-500" id="cardFilme">
                    {/* <a href="#!">
                        <img className="rounded-t-lg" src="https://th.bing.com/th/id/OIP.5nSdNOKMXD4x7qd_fG6TlQHaFD?w=260&h=180&c=7&r=0&o=5&pid=1.7" />
                    </a> */}
                    <div className="p-6">
                        <h5 className="text-gray-900  font-medium mb-2 text-4xl">Usuários</h5>
                        <p className="text-gray-700 text-9xl mb-4">

                        </p>

                    </div>
                </div>
                <div className="rounded-lg shadow-lg bg-white max-w-sm m-2 hover:shadow-blue-500" id="cardCatalogo">
                    {/* <a href="#!">
                        <img className="rounded-t-lg" src="https://th.bing.com/th/id/R.0815ae0e4a01849a3548bb904ca5cd95?rik=e0oB99YrRtz2xA&pid=ImgRaw&r=0&sres=1&sresct=1" alt="" />
                    </a> */}
                    <div className="p-6">
                        <h5 className="text-gray-900  font-medium mb-2 text-4xl">Contratos</h5>
                        <p className="text-gray-700  mb-4 text-9xl">

                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideBar