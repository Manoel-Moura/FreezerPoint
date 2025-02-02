import React, { useState, useEffect, useRef } from 'react'
import { Container, ContentForm, Image, Logo } from './styles'
import logo from '../../assets/logo.svg'
import api from '../../services/api'
import { Form } from '@unform/web'
import * as Yup from 'yup'
import Input from '../../components/input'
import left from '../../assets/left.png'
import { Link } from 'react-router-dom'

function UpdateEmail() {
  const formReference = useRef(null)

  const formSubmit = async data => {
    //Valida dos campos do formulário
    try {
      const scheme = Yup.object().shape({
        newEmail: Yup.string()
          .email('Email inválido')
          .required('Você precisa digitar um email')
      })
      await scheme.validate(data, { abortEarly: false })

      //Faz a requisição da api e grava no banco de dados
      const response = await api.put('/updateEmail', {
        newEmail: data.newEmail
      })
      //Atuliza a pagina
      window.location.reload()
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const erros = {}
        error.inner.forEach(e => {
          erros[e.path] = e.message
        })
        console.log(erros)
        formReference.current?.setErrors(erros)
      }
    }
  }

  //pegando os dados do backend
  const [data, setData] = useState([])
  useEffect(async () => {
    console.log('teste')
    const response = await api.get('/searchID')
    setData(response.data)
  }, [])

  return (
    <>
      <Logo>
        <div className="container">
          <Link to="/perfil">
            {' '}
            <img className="exitButton" size="20px" src={left} alt="" />{' '}
          </Link>
          <img src={logo} alt="icon" />
        </div>
      </Logo>
      <Container>
        <ContentForm>
          <Form ref={formReference} onSubmit={formSubmit}>
            <h1 className="title">Editar</h1>
            <h2>Email antigo</h2>
            <p className="email" href="">
              {data.email}
            </p>
            <h2 className="tituloEmail">Novo Email</h2>
            <Input
              name="newEmail"
              type="email"
              placeholder="Digite seu novo email"
            />
            <div className="contentButton">
              <button type="submit" className="botao" id="teste">
                {' '}
                <p className="texto">Aplicar</p>
              </button>
            </div>
          </Form>
        </ContentForm>
        <Image></Image>
      </Container>
    </>
  )
}

export default UpdateEmail
