import React from "react";

const FlatUpContext = React.createContext([{
    userToken: '',
    userId: 0
    },() => {}]);

export default FlatUpContext;