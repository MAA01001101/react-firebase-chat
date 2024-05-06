import Chatlist from "./chatList/ChatList"
import Userinfo from "./userInfo/Userinfo"
import "/workspaces/react-firebase-chat/src/components/list/list.css"
const List = ()=>{

    return(
        <div className="list">
            <Userinfo/>
            <Chatlist />
        </div>
    )
}

export default List