import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const FormInput = styled.input`
border: 1px solid blue;
`;
const ErrorSpan = styled.span`
  color: blue;
  display: ${(props) => props.isError ? 'block' : 'none'};
`;


const App = () => {

  const fetchAddress = async () => {
    const address = await axios.get(`https://viacep.com.br/ws/${form.cep}/json/`);
    setForm({ ...form, logradouro: address.data.logradouro });
  };

  const createCandidate = async (candidate) => {
    try {
      const user = await axios.post('http://localhost:3000/register', form);
      if (user.status === 200) {
        alert('Sua inscrição foi confirmada!');
      }

    } catch (error) {
      setCpfError(true);
    }
  };

  const [form, setForm] = useState({
    name: '',
    cep: '',
    cpf: '',
    email: '',
    gender: '',
  });

  const [cpfError, setCpfError] = useState(false);



  return (
    <div>
      <div>
        <label>nome</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, name: e.target.value });
        }} value={form.name}></FormInput>
      </div>
      <div>
        <label>cep</label>
        <FormInput onBlur={() => {
          fetchAddress();
        }} onChange={(e) => {
          setForm({ ...form, cep: e.target.value });
        }} value={form.cep}></FormInput>
      </div>
      <div>
        <label>cpf</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, email: e.target.value });
        }} value={form.cpf}></FormInput>
        <ErrorSpan isError={cpfError}>CPF repetido em nossa base de dados. Cadastre-se usando outro CPF.</ErrorSpan>

      </div>

      <div>
        <label>email</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, email: e.target.value });
        }} value={form.email}></FormInput>
        <ErrorSpan isError={emailError}>Email ja foi cadastrado</ErrorSpan>

      </div>

      <div>
        <label>genero</label>
        <FormInput onChange={(e) => {
          setForm({ ...form, gender: e.target.value });
        }} value={form.gender}></FormInput>
      </div>

      <button onClick={() => createCandidate()}>Enviar</button>
    </div>

  );
};

export default App;