import React from 'react';
import './PostItem.css';


const PostItem = (props) => {
    const date = new Date(props.dateTime).toString().split(' ')
    const forematedDat = `${date[1]} ${date[2]}, ${date[3]}`
    const formatPrice = props.price.toFixed(2)
    return(
    
    <li>
    <a className="postContainer" href={props.url}>
        <div className="more"><i className="fas fa-ellipsis-v"></i></div>
            <div className="postHeader">
            <div className="headerLeft">
                <img className="avatar" src={props.userImage} alt=""/>
                <div className="postInfo">
                    <p className="spitballer">SpitBaller</p>
                    <p>{forematedDat}</p>
                </div>

            </div>
                {props.price > 0 ? <p className="price">{formatPrice} Pts</p>: null}
            
            </div>
            
            <div className="mainPost">
                <div className="votesContainer">
                    <i className="fas fa-chevron-up"
                    style={props.votes > 0 ? {color: '#5C5C5C'}: null}></i>
                    {props.votes}
                    <i className="fas fa-chevron-down"></i>
                </div>
                <div className="content">
                <div className="postText">
                    <div className="postTitleRow">
                        <p className="postTitle">{props.title}</p>
                        <i className="far fa-file-alt"></i>
                    </div>
                    <p>{props.snippet}</p>
                    </div>
                    <p>{props.university} ⦁ {props.course}</p>
                </div>
                
            </div>
            <div className="statistics">
            <i className="fas fa-cloud-download-alt"></i><p>{props.views}</p>
            <i className="far fa-eye"></i><p>{props.downloads}</p> 
            </div>


        </a>
        </li> 
    )}

export default PostItem;
