import { Stack } from '@mui/material'
import React from 'react'
import ChatItem from '../specific/ChatItem'
import { sampleChats } from '../../constants/sampleData'
import { useSelector } from 'react-redux'


const ChatList = ({w="100%",chats=sampleChats,chatId,onlineUsers=[],newMessagesAlert=[{chatId:"",count:0}],handleDeleteChat}) => {
    console.log("online users:",onlineUsers);
  
  return (
    <Stack overflow={"auto"} height={"100%"} width={w} direction={"column"}>
    {
        chats?.map((data,index)=>{
          const {avatar,name,_id,groupChat,members}=data;

          const newMessageAlert=newMessagesAlert.find((alert)=>alert.chatId===_id);

         const isOnline = members?.some((member) =>
          onlineUsers.includes(member)
        );
;
         
            return (

             
                <ChatItem key={_id} newMessageAlert={newMessageAlert} isOnline={isOnline} index={index} avatar={avatar} name={name} _id={_id}  sameSender={_id===chatId} groupChat={groupChat} handleDeleteChat={handleDeleteChat}
                />

            )
        })
    }

    </Stack>
  )
}

export default ChatList