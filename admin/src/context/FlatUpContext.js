import React from "react";

const FlatUpContext = React.createContext([{
    userToken: '',
    userId: ''
    },() => {}]);

export default FlatUpContext;