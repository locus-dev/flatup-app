import React from "react";

const FlatUpContext = React.createContext([{
    userToken: '',
    userId: 0,
    userPessoaId: 0,
    userEnderecoId: 0,
    userEmail: '',
    hasPersonalInfo: false,
    userPersonalInfo: {},
    },() => {}]);

export default FlatUpContext;