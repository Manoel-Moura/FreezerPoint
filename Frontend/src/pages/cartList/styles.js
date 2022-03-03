import styled from 'styled-components'
// import image from '../../assets/image.svg'

export const Logo = styled.div`
  .container {
    display: flex;
  }
`

export const Container = styled.div`
  display: flex;
  height: 100vh;
  margin-left: 2rem;
`

export const ContentForm = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  width: 50%;
  margin-right: 5rem;

  h1 {
    margin-bottom: 1rem;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    color: rgba(32, 32, 40, 0.8);
  }

  h2 {
    color: rgba(32, 32, 40, 0.8);
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }

  .containerName {
    display: flex;
    border-radius: 0.5rem;
    border-color: #6c70ef;
    margin-bottom: 1rem;
    border: none;
    outline: none;
    background: #aba59c;
    padding: 0.5rem;
    width: 100%;
    padding-right: 50%;
    box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.25);
    transition: background 0.2s;
  }
  .item {
    margin-right: 0.5rem;
    background-color: white;
    border-radius: 0.5rem;
    padding: 0.625rem;
    /* width: 184.32px; */
    width: 5rem;
    flex: none;
  }

  .item .conteudoItem {
    display: grid;
    justify-content: center;
  }

  .item .conteudoItem .imageItem {
    /* width: 100px;
    height:100px; */
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .contentContainer {
    margin-left: 0.5rem;
  }

  li {
    margin-top: 0.5rem;
  }
  .containerInfo {
    display: flex;
    p {
      margin-left: 0.5rem;
      font-family: 'Nunito', sans-serif;
      color: black;
    }
  }
  .containerButton {
    display: flex;
    justify-content: right;
  }

  a {
    font-family: 'Nunito', sans-serif;

    color: white;
  }
`

