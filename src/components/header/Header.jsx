import { faBed } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../../config.js";

import "./header.css";
import { useContext } from "react";
import { ContextoUsuario } from "../../App.js";

const Header = ({ type }) => {
	const [destination, setDestination] = useState("");
	const [openDate, setOpenDate] = useState(false);
	const [date, setDate] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: "selection",
		},
	]);

	const [openOptions, setOpenOptions] = useState(false);
	const [options, setOptions] = useState({
		adult: 1,
		children: 0,
		room: 1,
	});


	const contexto = useContext(ContextoUsuario);

	const navigate = useNavigate();

	const handleOption = (name, operation) => {
		setOptions((prev) => {
			return {
				...prev,
				[name]:
					operation === "i" ? options[name] + 1 : options[name] - 1,
			};
		});
	};

	const handleSearch = () => {
		axios
			.get(config.URL + "/imovel/listar", {
				headers: {
					Authorization: "Bearer " + contexto.token,
				},
				data: {
					destino: destination,
					data: date,
					opcoes: options,
				},
			})
			.then((resposta) => {
				navigate("/imoveis", resposta);
			})
			.catch();
	};

	return (
		<div className="header">
			<div
				className={
					type === "list"
						? "headerContainer listmode"
						: "headerContainer"
				}
			>
				{type !== "list" && (
					<>
						<div className="titulo-central">
							<h1 className="headerTitle">
								Está a procura de um flat na beira da praia?
							</h1>
							<p className="headerDesc">
								Aqui você irá encontrar as melhores
								possibilidades de flat.
							</p>
						</div>
						<div className="headerSearch">
							<div className="headerSearchItem">
								<input
									type="text"
									placeholder="Pra onde você vai?"
									className="headerSearchInput"
									onChange={(e) =>
										setDestination(e.target.value)
									}
								/>
							</div>
							<div className="headerSearchItem">
								<button
									className="headerBtn"
									onClick={handleSearch}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="25"
										height="25"
										fill="currentColor"
										className="bi bi-search"
										viewBox="0 0 16 16"
									>
										<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
									</svg>
								</button>
							</div>
						</div>{" "}
					</>
				)}
			</div>
		</div>
	);
};

export default Header;
