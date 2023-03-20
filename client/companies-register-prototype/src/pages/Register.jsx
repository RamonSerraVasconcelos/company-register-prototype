import React from "react";
import Navbar from "../components/navbar";

const Register = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h2 className="text-center text-dark mt-5">Cadastro de Empresas</h2>
            <div className="card my-5">
              <form
                id="registerForm"
                className="card-body cardbody-color p-lg-5"
              >
                <div className="text-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2891/2891415.png"
                    className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                    width="200px"
                    alt="profile"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="razaoSocial"
                    placeholder="Razão Social"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="cnpj"
                    placeholder="CNPJ"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="endereco"
                    placeholder="Endereço"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="ramoNegocio"
                    placeholder="Ramo do negócio"
                    required
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-color px-5 mb-5 w-100"
                  >
                    Registrar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
