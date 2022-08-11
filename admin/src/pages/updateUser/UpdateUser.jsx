import "./newUser.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import FormUser from "./formUserUpdate/FormUser";

const UpdateUser = () => {

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

export default UpdateUser;