import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import './global.css'
import style from './App.module.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={style.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Lucas Garcia"
            content="Exemplo de texto!"
          />  
          <Post 
            author="Lucas Garcia"
            content="Exemplo de texto!"
          />  
        </main>
      </div>
    </div>
  )
}

