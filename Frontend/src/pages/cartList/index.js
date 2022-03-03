import React, { useState, useEffect, useRef } from 'react'
import { Container, ContentForm, Image, Logo } from './styles'
import logo from '../../assets/logo.svg'
import left from '../../assets/left.png'
import api from '../../services/api'
import { useParams } from 'react-router-dom'

import { Link, useHistory } from 'react-router-dom'

function CartList() {
  const [data, setData] = useState([])
  const reference = useRef(null)
  const { id } = useParams()
  const history = useHistory()

  useEffect(async () => {
    // Pegando id do usuário
    const response2 = await api.get('/searchID')

    const id_user = response2.data['id']

    const createCart = await api.post('/createCart', {
      id_user: id_user,
      id_book: id
    })

    if (createCart.status === 400) {
      history.push('/Home')
    }

    const response = await api.get(`/getCart/${id_user}`)

    const result = response.data.map(book => {
      return {
        id_book: book.id_book,
        name: book.books.name,
        author: book.books.author,
        imageurl: book.books.imageurl,
        category: book.books.category,
        genre: book.books.genre
      }
    })

    setData(result)
  }, [])

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
          <h1 className="title"> Meu carrinho</h1>
          {data.map(item => {
            const { author, id_book, name, imageurl, category, genre } = item
            return (
              <>
                <div className="containerName">
                  <div className="item">
                    <div className="conteudoItem">
                      <img src={imageurl} className="imageItem" />
                      {/* <img clasname="icon" src={icon} alt="icone fav" /> */}
                    </div>
                  </div>
                  {/* <Link to={`/contactPage/${id_livro}`}> */}
                  <div className="contentContainer">
                    <ul>
                      <li>
                        <div className="containerInfo">
                          Título: <p>{name}</p>
                        </div>
                      </li>
                      <li>
                        <div className="containerInfo">
                          Por: <p>{author}</p>
                        </div>
                      </li>
                      <li>
                        <div className="containerInfo">
                          Tipo: <p>{category}</p>
                        </div>
                      </li>
                      <li>
                        <div className="containerInfo">
                          Gênero: <p>{genre}</p>
                        </div>
                      </li>
                      <li>
                        <div class="containerInfo">
                          <Link to={`/bookDeleted/${id_book}`}>
                            <p>Excluir</p>
                          </Link>
                          <Link to={`/contactPage/${id_book}`}>
                            <p>info</p>
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="containerButton"></div>
                  {/* </Link> */}
                </div>
              </>
            )
          })}
        </ContentForm>

        {/* <Image></Image> */}
      </Container>
    </>
  )
}

export default CartList
