import "./imovelCard.css";
import { ref, getStorage, listAll, getBlob } from "firebase/storage";
import { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import React from "react";
import { Button } from "reactstrap";
import DATA from "../../DATAFILL";
import app from '../../config'
import axios from "axios";
import FlatUpContext from "../../components/context/FlatUpContext";

const ImovelCard = (props) => {
      return (
            <div className="d-flex align-items-center justify-content-center" style={{width: '100vw', height: "100vh"}}>
                  <div className="container">
                        <div className="card">
                              <div className="text-center py-3 d-flex justify-content-center align-items-center  ">
                                    <h2 className="text-azul-padrao mt-3">Confirme sua reserva</h2>
                              </div>
                              <div className="p-3">
                                    <div className="d-flex mt-2 align-items-center border" style={{ borderRadius: "10px" }}>
                                          <div className="bg-primary" style={{ backgroundImage: '(url())', borderRadius: "10px", backgroundSize: "cover", width: "200px", height: "120px" }}>
                                                {/* adiciona a foto do imovel como background */}
                                          </div>
                                          <div className="p-3 d-flex flex-column align-items-start">
                                                <h5>{props.titulo}</h5>
                                                <h6>{props.cidade}</h6>
                                                <h6>R$ {props.valor} /noite</h6>
                                          </div>
                                    </div>
                              </div>
                              <hr />
                              <div className="px-3">
                                    <h4 style={{ textAlign: "left" }}>Informações do preço</h4>
                                    <div className="precos">
                                          <div className="d-flex mt-3 justify-content-between">
                                                <h5>Desconto</h5>
                                                <h5 className="text-danger">-25%</h5>
                                          </div>
                                    </div>
                              </div>
                              <hr />
                              <div className="py-3 mb-2 d-flex justify-content-between p-3">
                                    <h3>Total (BRL) </h3>
                                    <h3>R$ {props.preco}</h3>
                              </div>

                              <button>Finalizar Reserva</button>
                        </div>

                  </div>
            </div>
      );
};

export default ImovelCard;
