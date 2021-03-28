import {rerenderEntireTree} from "../render";
let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi , how are you ?", lick: 5 },
      { id: 2, message: "It's my first post.", lick: 23 }
    ],
    newPostText:'it-kamasutra.com'
  },
  dialogsPage: {
    dialogsData: [
      { id: 1, name: "Dimych" },
      { id: 2, name: "Andrey" },
      { id: 3, name: "Sveta" },
      { id: 4, name: "Sasha" },
      { id: 5, name: "Viktor" },
      { id: 6, name: "Valera" }
    ],
    messageData: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How is your ?" },
      { id: 3, message: "Yo" },
      { id: 4, message: "Yo" },
      { id: 5, message: "Yo" },
      { id: 6, message: "Yo" }
    ],
    newAnswerText:'answer'
  },
};
export let addAnswer = (answer) =>{
  let newMessage = {
    id: 7,
    message: answer
  };
  state.dialogsPage.messageData.push(newMessage)
  state.profilePage.newAnswerText='';
  rerenderEntireTree(state);
}
export let addPost = () =>{
  let newPost = {
    id: 3,
    message: state.profilePage.newPostText,
    lick: 2
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText='';
  rerenderEntireTree(state);
}

export let updateNewText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}
 


export default state;
