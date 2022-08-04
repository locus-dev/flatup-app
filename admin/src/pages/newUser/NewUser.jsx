import "./newUser.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import FormUser from "./formUser/FormUser";

const NewUser = () => {

	return (
		<>
			<div className="new">
				<Sidebar />
				<div className="newContainer">
					<Navbar />
					<FormUser />
				</div>
			</div>
		</>

	);
};

export default NewUser;