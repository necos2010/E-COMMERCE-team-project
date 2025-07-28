import SideImg from "../../assets/Side-img.png";

function Index() {
  return (
    <div>
      <div className="login-main-wrapper">
        <img src={SideImg} alt="" />
        <div className="login-word-wrapper">
          <h2>Create an account</h2>
          <p>Enter your details below</p>
        </div>
      </div>
    </div>
  )
}

export default Index