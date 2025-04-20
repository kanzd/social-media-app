import React, {useEffect, useState} from 'react';
import './Post.css';
import Comment from '../../Img/comment.png';
import Share from '../../Img/share.png';
import Like from '../../Img/like.png';
import Notlike from '../../Img/notlike.png';
import { useSelector} from 'react-redux';
import { likePost } from '../../api/PostRequest';
import Comments from "../Comments/Comments";
import AddComment from "../AddComment/AddComment";



const Post = ({ data }) => {

    const { user } = useSelector((state) => state.authReducer.authData)
    const [liked, setLiked] = useState(data.likes.includes(user._id))
    const [likes, setLikes] = useState(data.likes.length)
    const [showComment, setShowComment] = useState(false);

    const handleLike = () => {
        setLiked((prev) => !prev)
        likePost(data._id, user._id)
        liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1)
    }
    const handleComment = () => {
        setShowComment(prev => !prev);
    }

    return (
        <div className='Post'>

            <img src={data.image ? 'http://localhost:4000/images/' + data.image : " "} alt="" />

            {data.video && (
                <video controls>
                    <source src={'http://localhost:4000/images/' + data.video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}


            <div className="postReact">
                <div style={{ display: "flex", gap: "4px" }}>
                    <img src={liked ? Like : Notlike} alt="" style={{ cursor: "pointer" }} onClick={handleLike} />
                    {likes > 0 &&  <span style={{ color: "var(--gray)", fontSize: '14px' }}>{likes}</span>}
                </div>
                <img src={Comment} alt=""  onClick={handleComment}/>
                <img src={Share} alt="" />
            </div>
            <div className="detail">
                <span> <b>{data.name}</b> </span>
                <span>{data.desc}</span>
            </div>
            <div>
                {showComment && (<Comments postId={data._id} />) }
            </div>
        </div>
    )
}

export default Post