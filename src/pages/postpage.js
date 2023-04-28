import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function PostPage() {

    const { id } = useParams();
    const [postInfo, setPostInfo] = useState(null);

    useEffect(() => {

        fetch(`http://localhost:4000/post/${id}`)
            .then(response => {
                response.json().then(postInfo => {
                    setPostInfo(postInfo)
                });
            });

    }, []);
    if (!postInfo) {
        return '';
    }
    return (
        <>
            <img src={`http://localhost:4000/${postInfo.cover}`} alt=""></img>
            <div>this is post</div>
        </>
    )
}