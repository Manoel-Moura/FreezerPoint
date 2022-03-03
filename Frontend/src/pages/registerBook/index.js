import React, { useRef } from 'react'
import { Container, ContentForm, Image, Header } from './styles'
import logo from '../../assets/logo.svg'
import { Form } from '@unform/web'
import Input from '../../components/input'
import api from '../../services/api'
import left from '../../assets/left.png'
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react'

function RegisterBook() {
  const formReference = useRef(null)
  const history = useHistory()

  const formSubmit = async data => {
    const response = await api.post('/createBook', {
      name: data.name,
      author: data.author,
      category: data.category,
      genre: data.genre,
      edition: data.edition,
      synopsis: data.synopsis,
      imageurl: data.url
    })

  

    // Pegando id do livro
    const books = await api.get('getBook')
    // Pegando o ultimo livro adicionado
    const lastBook = books.data[books.data.length - 1]
    const id_books = lastBook['id']

    // Pegando id do usuário
    const user = await api.get('/searchId')
    const id_user = user.data['id']

    const createList = await api.post('/createList', {
      id_user: id_user,
      id_books: id_books
    })

    console.log(createList.data)
    console.log(response.data)
    history.push('/Home')
  }

  return (
    <>
      <Header>
        <Link to="/Home">
          {' '}
          <img className="exitButton" size="20px" src={left} alt="" />{' '}
        </Link>
        <img src={logo} alt="logo" />
      </Header>

      <Container>
        <ContentForm>
          <h1 className="title">Cadastre um livro</h1>
          <Form ref={formReference} onSubmit={formSubmit}>
            {/* <h2>Seu livro é para...</h2>
            <Button name="oi" type="text" /> */}
            <h2>Título</h2>
            <Input name="name" type="text" placeholder="Harry Potter" />
            <h2>Autor</h2>
            <Input name="author" type="text" placeholder="J. K. Rowling" />
            <h2>Categoria</h2>
            <Input name="category" type="text" placeholder="Livro" />
            <h2>Gênero</h2>
            <Input name="genre" type="text" placeholder="Fantasia" />
            <h2>Edição</h2>
            <Input name="edition" type="number" placeholder="2008" />
            <h2>Sinopse</h2>
            <Input
              name="synopsis"
              type="text"
              placeholder="Uma breve descrição sobre o livro"
            ></Input>
            <h2>Url da imagem</h2>
            <Input name="url" type="text" placeholder="www.urlimage.com" />
            <button type="submit"> Cadastrar </button>
          </Form>
        </ContentForm>
        <Image> </Image>
      </Container>
    </>
  )
}

export default RegisterBook
