import { use, useRef, useState } from "react";
import PostItem from "./components/postItem";
import "./styles/App.css";
import PostList from "./components/PostList";
import MyButton from "./components/UI/Button/MyButton";
import MyInput from "./components/UI/Input/MyInput";
import Card from "./components/Card";
import CardList from "./components/CardList";


function App() {
    // const [posts, setPosts] = useState([
    //     {
    //         id: 1,
    //         title: "First title",
    //         description: "TextTextTextTextTextText",
    //     },
    //     {
    //         id: 2,
    //         title: "Second title",
    //         description: "TextTextTextTextTextText",
    //     },
    //     {
    //         id: 3,
    //         title: "Third title",
    //         description: "TextTextTextTextTextText",
    //     },
    // ]);

    // const [post, setPost] = useState({title: '', description: ''});

    // const addNewPost = (e) => {
    //     e.preventDefault()

    //     setPosts([...posts, {...post, id: Date.now()}])
    //     setPost({title: '', description: ''})
    // }

    const [items, setItems] = useState([
        {
            id: Date.now(),
            image: "https://i.pinimg.com/736x/cb/02/b8/cb02b8c760b323dc8a1989636fecd2b9.jpg",
            name: "anime 1",
            description: "descr 1"
        },
        {
            id: Date.now(),
            image: "https://i.pinimg.com/736x/cb/02/b8/cb02b8c760b323dc8a1989636fecd2b9.jpg",
            name: "anime 2",
            description: "descr 2"
        },
        {
            id: Date.now(),
            image: "https://i.pinimg.com/736x/cb/02/b8/cb02b8c760b323dc8a1989636fecd2b9.jpg",
            name: "anime 3",
            description: "descr 3"
        },
    ])

    return (
        <div className="App">
            
            <CardList items = {items}/>
            {/* <form>
                <MyInput 
                    value={post.title} 
                    onChange={e => setPost({...post, title: e.target.value})}
                    type="text" 
                    placeholder="Название поста"
                />
                <MyInput 
                    value={post.description}
                    onChange={e => setPost({...post, description: e.target.value})}
                    type="text" 
                    placeholder="Описание поста"
                />
                <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </form>
            <PostList posts={posts} title="Список постов 1" /> */}
        </div>
    );
}

export default App;
