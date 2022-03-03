import React, { useState, useEffect, useRef } from 'react'
import { Container, ContentForm, Image, Logo } from './styles'
import logo from '../../assets/logo.svg'
import editorIcon from '../../assets/editor.svg'
import editor from '../../assets/editor.svg'
import left from '../../assets/left.png'
import api from '../../services/api'
import { useParams } from 'react-router-dom'

import { Link } from 'react-router-dom'

function BookProfile() {
  const [data, setData] = useState([])
  const reference = useRef(null)
  // const history = useHistory()
  const { id } = useParams()

  useEffect(async () => {
    const response = await api.get(`/getABook/${id}`)
    setData(response.data)
  }, [])

  // console.log(data.id)

  return (
    <>
      <Logo>
        <div className="container">
          <Link to="/Home">
            {' '}
            <img className="exitButton" size="20px" src={left} alt="" />{' '}
          </Link>
          <img src={logo} alt="icon" />
        </div>
      </Logo>
      <Container>
        <ContentForm ref={reference}>
          <div>
            <h1 className="title">Meu livro</h1>
            <h2>Nome</h2>
            <div className="containerName">
              <p className="nome" href="">
                {data.name}
              </p>
              <div className="icon">
                <Link to={`/updateBookName/${id}`}>
                  <img src={editor} alt="" />
                </Link>
              </div>
            </div>
            <h2>Autor</h2>
            <div className="containerAuthor">
              <p className="autor" href="">
                {data.author}
              </p>
              <div className="icon">
                <Link to={`/updateAuthor/${id}`}>
                  <img src={editor} alt="" />
                </Link>
              </div>
            </div>
            <h2 id="tituloSinopse">Sinopse</h2>
            <div className="containerSinopse">
              <p className="sinopse" href="">
                {data.synopsis}
              </p>
              <div className="icon">
                <Link to={`/updateSynopsis/${id}`}>
                  <img src={editor} alt="" />
                </Link>
              </div>
            </div>
            {/* Fim container
             */}
            <h2 id="tituloCategoria">Categoria</h2>
            <div className="containerCategoria">
              <p className="categoria" href="">
                {data.category}
              </p>
              <div className="icon">
                <Link to={`/updateCategory/${id}`}>
                  <img src={editor} alt="" />
                </Link>
              </div>
            </div>
            <h2 id="tituloGenero">Gênero</h2>
            <div className="containerGenero">
              <p className="genero" href="">
                {data.genre}
              </p>
              <div className="icon">
                <Link to={`/updateGenre/${id}`}>
                  <img src={editor} alt="" />
                </Link>
              </div>
            </div>
            <h2 id="tituloEdicao">Edição</h2>
            <div className="containerEdicao">
              <p className="edicao" href="">
                {data.edition}
              </p>
              <div className="icon">
                <Link to={`/updateEdition/${id}`}>
                  <img src={editor} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </ContentForm>
        <Link to={`/updateImage/${id}`}>
          <div className="containerItem">
            <div className="item">
              <div className="conteudoItem">
                <img src={data.imageurl} className="imageItem" />
              </div>
            </div>
          </div>
        </Link>
      </Container>
    </>
  )
}

export default BookProfile
