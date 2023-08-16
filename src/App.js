import logo from "./images/logo.jpg"
import p1 from "./images/p1.jpg"
import p2 from "./images/p2.jpg"
import p3 from "./images/p3.jpg"
import p4 from "./images/p4.jpg"
import p5 from "./images/p5.jpg"
import p6 from "./images/p6.jpg"
import p7 from "./images/p7.jpg"
import p8 from "./images/p8.jpg"
function App() {
  return (
    <>
      <div className="top">
        <img src={logo} className="logo" alt="" />
        <div className="rp">
        <span>rocky poly printers</span>
        <p>CONTACT Number : 9810380356</p>
        </div>
      </div>
      <div className="mid">
        <div className="card">
          <img src={p2} alt="" className="pimg" />
          <div className="rt">
            <span className="title">price : 225rs per kg</span>
            <span className="title">size : 22x28</span>
            <span className="desc">piece : 25 pieces in one kg</span>
          </div>
        </div>
        <div className="card">
          <img src={p3} alt="" className="pimg" />
          <div className="rt">
            <span className="title">price : 225rs per kg</span>
            <span className="title">size : 22x28</span>
            <span className="desc">piece : 25 pieces in one kg</span>
          </div>
        </div>
        <div className="card">
          <img src={p4} alt="" className="pimg" />
          <div className="rt">
            <span className="tt">price : 225rs per kg</span>
            <span className="tt">size : 22x28</span>
            <span className="tt">pie : 25 pieces in one kg</span>
          </div>
        </div>

        <div className="card">
          <img src={p5} alt="" className="pimg" />
          <div className="rt">
            <span className="tt">price : 185rs per kg</span>
            <span className="tt">size : 22x28 D cut </span>
            <span className="tt">piece : 27 pieces in one kg</span>
          </div>
        </div>
        <div className="card">
          <img src={p6} alt="" className="pimg" />
          <div className="rt">
            <span className="title">price : 185rs per kg</span>
            <span className="title">size : 22x28 D cut </span>
            <span className="title">piece : 27 pieces in one kg</span>
          </div>
        </div>
        <div className="card">
          <img src={p7} alt="" className="pimg" />
          <div className="rt">
            <span className="title">price : 185rs per kg</span>
            <span className="title">size : 22x28 D cut </span>
            <span className="title">piece : 27 pieces in one kg</span>
          </div>
        </div>
        <div className="card">
          <img src={p8} alt="" className="pimg" />
          <div className="rt">
            <span className="title">price : 225rs per kg</span>
            <span className="title">size : 22x28</span>
            <span className="desc">piece : 25 pieces in one kg</span>
          </div>
        </div>
        <div className="card">
          <img src={p1} alt="" className="pimg" />
          <div className="rt">
            <span className="title">price : 185rs per kg</span>
            <span className="title">size : 22x28 D cut </span>
            <span className="title">piece: 27 pieces in one kg</span>
          </div>
        </div>
      </div >
    </>
  );
}

export default App;
