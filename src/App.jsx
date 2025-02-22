import { use, useRef, useState } from "react";
import "./index.css";
import CardsList from "./components/UI/CardsList/CardsList";
import Header from "./components/UI/Header/Header";
import Footer from "./components/UI/Footer/Footer";

const App = () => {
    const [cardItems, setCardItems] = useState([
        {
            id: 1,
            cardImgUrl:
                "https://i.pinimg.com/736x/08/b4/d5/08b4d55c60785b9164d5b879fefd3a9f.jpg",
            title: "title 1",
            subtitle: "subtitle 1",
            description: "desc text",
        },
        {
            id: 2,
            cardImgUrl:
                "https://i.pinimg.com/736x/08/b4/d5/08b4d55c60785b9164d5b879fefd3a9f.jpg",
            title: "title 2",
            subtitle: "subtitle 2",
            description: "desc text",
        },
        {
            id: 2,
            cardImgUrl:
                "https://i.pinimg.com/736x/08/b4/d5/08b4d55c60785b9164d5b879fefd3a9f.jpg",
            title: "title 2",
            subtitle: "subtitle 2",
            description: "desc text",
        },
        {
            id: 2,
            cardImgUrl:
                "https://i.pinimg.com/736x/08/b4/d5/08b4d55c60785b9164d5b879fefd3a9f.jpg",
            title: "title 2",
            subtitle: "subtitle 2",
            description: "desc text",
        },
        {
            id: 2,
            cardImgUrl:
                "https://i.pinimg.com/736x/08/b4/d5/08b4d55c60785b9164d5b879fefd3a9f.jpg",
            title: "title 2",
            subtitle: "subtitle 2",
            description: "desc text",
        },
        {
            id: 2,
            cardImgUrl:
                "https://i.pinimg.com/736x/08/b4/d5/08b4d55c60785b9164d5b879fefd3a9f.jpg",
            title: "title 2",
            subtitle: "subtitle 2",
            description: "desc text",
        },
        {
            id: 2,
            cardImgUrl:
                "https://i.pinimg.com/736x/08/b4/d5/08b4d55c60785b9164d5b879fefd3a9f.jpg",
            title: "title 2",
            subtitle: "subtitle 2",
            description: "desc text",
        },
        {
            id: 2,
            cardImgUrl:
                "https://i.pinimg.com/736x/08/b4/d5/08b4d55c60785b9164d5b879fefd3a9f.jpg",
            title: "title 2",
            subtitle: "subtitle 2",
            description: "desc text",
        },
        {
            id: 2,
            cardImgUrl:
                "https://i.pinimg.com/736x/08/b4/d5/08b4d55c60785b9164d5b879fefd3a9f.jpg",
            title: "title 2",
            subtitle: "subtitle 2",
            description: "desc text",
        },
        {
            id: 2,
            cardImgUrl:
                "https://i.pinimg.com/736x/08/b4/d5/08b4d55c60785b9164d5b879fefd3a9f.jpg",
            title: "title 2",
            subtitle: "subtitle 2",
            description: "desc text",
        },
        {
            id: 2,
            cardImgUrl:
                "https://i.pinimg.com/736x/08/b4/d5/08b4d55c60785b9164d5b879fefd3a9f.jpg",
            title: "title 2",
            subtitle: "subtitle 2",
            description: "desc text",
        },
        {
            id: 2,
            cardImgUrl:
                "https://i.pinimg.com/736x/08/b4/d5/08b4d55c60785b9164d5b879fefd3a9f.jpg",
            title: "title 2",
            subtitle: "subtitle 2",
            description: "desc text",
        },
        {
            id: 2,
            cardImgUrl:
                "https://i.pinimg.com/736x/08/b4/d5/08b4d55c60785b9164d5b879fefd3a9f.jpg",
            title: "title 2",
            subtitle: "subtitle 2",
            description: "desc text",
        },
        {
            id: 2,
            cardImgUrl:
                "https://i.pinimg.com/736x/08/b4/d5/08b4d55c60785b9164d5b879fefd3a9f.jpg",
            title: "title 2",
            subtitle: "subtitle 2",
            description: "desc text",
        },
        {
            id: 2,
            cardImgUrl:
                "https://i.pinimg.com/736x/08/b4/d5/08b4d55c60785b9164d5b879fefd3a9f.jpg",
            title: "title 2",
            subtitle: "subtitle 2",
            description: "desc text",
        },
        {
            id: 2,
            cardImgUrl:
                "https://i.pinimg.com/736x/08/b4/d5/08b4d55c60785b9164d5b879fefd3a9f.jpg",
            title: "title 2",
            subtitle: "subtitle 2",
            description: "desc text",
        },

    ]);

    return (
        <div className="min-h-screen flex flex-col bg-gray-900">
            <Header />
            <main className="container mx-auto p-4 flex-1">
                <h2 className="text-3xl font-bold text-white mb-6">
                    Популярные аниме
                </h2>
                <div className="flex flex-row overflow-x-auto space-x-4 pb-4">
                    <CardsList cardItems={cardItems}></CardsList>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default App;
