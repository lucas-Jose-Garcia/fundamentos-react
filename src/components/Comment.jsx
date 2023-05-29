import { Avatar } from "./Avatar"
import { Trash, ThumbsUp } from 'phosphor-react'
import styles from './Comment.module.css'
import { useState } from "react"

export function Comment({ id, content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0)

    function hendleDeleteComment() {
        onDeleteComment(id)
    }

    function hendleLikeComment() {
        setLikeCount(likeCount + 1)
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/lucas-Jose-Garcia.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Lucas Garcia</strong>
                            <time title="11 de Maio ás 08:13h" dateTime="2022-05-11 08:13:35">Cerda de 1h atrás</time>
                        </div>
                        <button onClick={hendleDeleteComment} title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{ content }</p>
                </div>

                <footer>
                    <button onClick={hendleLikeComment}>
                        <ThumbsUp size={20}/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}