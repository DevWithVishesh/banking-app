import Header from "../../components/header/Header";

function Dashboard() {

var token=localStorage.getItem("token");
var refreshToken=localStorage.getItem("refreshToken");
  return (
    <div className="dashboard">
      <Header />
      <h1>  {token}</h1>
       <h1> {refreshToken} </h1>
    </div>
  );
}

export default Dashboard;
