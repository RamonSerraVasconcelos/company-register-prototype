import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import axios from "axios";

const Home = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    axios("http://localhost:8080/company").then((res) => {
      setCompanies(res.data);
    });
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Razão Social</th>
            <th scope="col">CNPJ</th>
            <th scope="col">Endereço</th>
            <th scope="col">Ramo Negócio</th>
          </tr>
        </thead>
        <tbody>
          {companies.forEach((company) => {
            console.log(company);
            return (
              <tr key={company.id}>
                <td>{company.razaoSocial}</td>
                <td>{company.cnpj}</td>
                <td>{company.endereco}</td>
                <td>{company.ramoNegocio}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Home;
