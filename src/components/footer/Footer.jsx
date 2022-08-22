import { useNavigate } from "react-router-dom";
import "./footer.css";

const Footer = () => {
	const navigate = useNavigate();

	return (
		<div className="footer">
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					padding: 20,
				}}
			>
				<a
					onClick={() => {
						navigate("/");
					}}
					className="d-flex align-items-center p-0 text-dark link-primary"
				>
					<img
						alt="logo"
						src="https://firebasestorage.googleapis.com/v0/b/flatup-e23c8.appspot.com/o/ASSETS%2FMEDIA%2Fflatapp.png?alt=media&token=5e306ba7-83cb-4fcf-a653-83b50cde6f3a"
						width="80px"
					/>
				</a>
				<small className="ml-2">
					&copy; Locus, 2022. Todos os direitos reservados.
				</small>
			</div>
		</div>
	);
};

export default Footer;
