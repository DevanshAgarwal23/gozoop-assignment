import "./App.css";
import Data from "./data-beachhouse";
import { useState } from "react";
import axios from "axios";

function App() {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [phone, setphone] = useState();
  const [country, setcountry] = useState();
  const [error, seterror] = useState(false);

  const submit = async () => {
    if (name && email && phone && country) {
      seterror(false);
      await axios
        .post("/api/user", {
          name,
          email,
          phone,
          country,
        })
        .then(() => {
          console.log("Data send");
          document.getElementById("btnModal").click();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      seterror(true);
    }
  };

  return (
    <div className="container-fluid home-page">
      {/* <img
        className="logo rounded mx-auto d-block m-2 logo"
        alt="logo"
        src="https://scontent.fblr21-1.fna.fbcdn.net/v/t1.6435-9/78761865_106990640793513_3318576218638385152_n.png?_nc_cat=100&ccb=1-5&_nc_sid=973b4a&_nc_ohc=bamdz3cOYrsAX9Zb0lI&_nc_ht=scontent.fblr21-1.fna&oh=84ea9bfee7f0d5ad15b5f1fa0fc0938e&oe=619144F8"
      /> */}
      <p className="h2 text-center m-3 logo_name">THE BEACH HOUSE</p>
      <div className="container extra-padding">
        <div className="row">
          <div className="col-md-9 col-xs-12">
            <div className="row">
              {Data.slice(0, Data.length - 1).map((i) => (
                <div
                  className="col-xl-4 col-sm-6 text-center mb-2 fl"
                  key={i.id}
                >
                  <div className="content_img">
                    <img className="imgStyle" src={i.logo} alt={i.name} />
                    <div
                      className="text-center"
                      data-bs-toggle="modal"
                      data-bs-target={`#exampleModal${i.id}`}
                    >
                      <p>{i.name}</p>
                      <p>Click here</p>
                    </div>
                  </div>
                  <div
                    className="modal fade"
                    id={`exampleModal${i.id}`}
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            {i.name}
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <div className="space-img">
                            <img src={i.logo} alt={i.name} />
                          </div>
                          <div className="space-text text-secondary">
                            {i.description}
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-3  col-xs-12">
            <div className="row form-box text-center pb-3  ml-1">
              <h6 className="mt-3">ENQUIRE NOW</h6>
              <form onSubmit={submit}>
                <div className="mb-2">
                  <label for="name" className="form-label">
                    Name <i className="text-danger">*</i>
                  </label>
                  <input
                    required
                    autoFocus
                    type="text"
                    className="form-control"
                    id="name"
                    onChange={(e) => setname(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label for="email" className="form-label">
                    Email <i className="text-danger">*</i>
                  </label>
                  <input
                    required
                    type="email"
                    className="form-control"
                    id="email"
                    onChange={(e) => setemail(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label for="phone" className="form-label">
                    Phone <i className="text-danger">*</i>
                  </label>
                  <input
                    required
                    type="tel"
                    className="form-control"
                    id="phone"
                    onChange={(e) => setphone(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label for="country" className="form-label">
                    Country <i className="text-danger">*</i>
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="country"
                    onChange={(e) => setcountry(e.target.value)}
                  />
                </div>
                <p className="text-center">
                  <i>We will get back to you asap!</i>
                </p>
                <button type="button" className="btn btn-dark" onClick={submit}>
                  Submit
                </button>
                {error ? (
                  <div className="alert alert-danger mt-2">
                    * All the fields are mandatory.
                  </div>
                ) : (
                  ""
                )}
              </form>
            </div>
            <div className="row mt-2 mb-2">
              {Data.slice(-1).map((i) => (
                <div className="col-xl-4 col-sm-6 text-center pl" key={i.id}>
                  <div className="content_img">
                    <img className="imgStyle" src={i.logo} alt={i.name} />
                    <div
                      className="text-center"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <p>{i.name}</p>
                      <p>Click here</p>
                    </div>
                  </div>
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            {i.name}
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <div className="space-img">
                            <img className="" src={i.logo} alt={i.name} />
                          </div>
                          <div className="space-text text-secondary">
                            {i.description}
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              type="button"
              id="btnModal"
              class="btn btn-primary invis"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal2222"
            >
              Thank you
            </button>

            <div
              class="modal fade"
              id="exampleModal2222"
              tabindex="-1"
              aria-labelledby="exampleModalLabel2"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel2">
                      Thank You!
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <p>
                      Hi <b>{name}</b>,
                    </p>{" "}
                    <p>
                      Thank you for your patience, we will get back to you soon!
                    </p>
                    <p className="fltrgt">
                      <i>~ The Beach House</i>
                    </p>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="page-footer font-small">
        <div className="footer-copyright text-center py-3 foot">
          © 2021 - The Beach House
        </div>
      </footer>
    </div>
  );
}

export default App;
