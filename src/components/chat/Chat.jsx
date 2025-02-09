import { useState } from "react"
import "/workspaces/react-firebase-chat/src/components/chat/chat.css"
import EmojiPicker from "emoji-picker-react"
const Chat = ()=>{
    const [open, setOpen] = useState(false)
    const [text, setText] = useState("")
   
    console.log(text.target.value)

    return(
        <div className="chat">
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>Jane Doe</span>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" alt="" />
                    <img src="./video.png" alt="" />
                    <img src="./info.png" alt="" />
                </div>
            </div>
            <div className="center"></div>  
            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" alt="" /><img src="./camera.png" alt="" /><img src="./mic.png" alt="" />
                </div>
                <input type="text" placeholder="Type a message" onChange={(e)=> setText(e.target.value)}/>
                <div className="emoji">
                    
                    <img src="./emoji.png" alt="" onClick={()=> setOpen(prev=> !prev)}/>
                    <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
                </div>
                <button className="sendButton">Send</button>

            </div>
        </div>
    )
}

export default Chat