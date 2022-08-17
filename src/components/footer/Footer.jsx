import "./footer.css";

const Footer = () => {
	return (
		<div className="footer">
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<a href="/" className="d-flex align-items-center p-0 text-dark">
					<img
						alt="logo"
						src="./media/assets/flatapp.png"
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
