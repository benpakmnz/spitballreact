import React, {Component} from 'react';
import './App.css';
import PostItem from './components/PostItem';
import Data from './assets/data';
// import {Grid, Paper, Container } from '@material-ui/core';

class App extends Component {
  render() {
  return (
    <ul className="App">
      {Data.map(post => 
      <PostItem 
        key = {post.id}
        url={post.url}
        userImage={post.user.image}
        userName={post.user.name}
        dateTime={post.dateTime}
        votes={post.vote.votes}
        title={post.title}
        snippet={post.snippet}
        university={post.university}
        course={post.course}
        views={post.views}
        downloads={post.downloads}
        price={post.price}
      />
      )}
    </ul>

  );
          }
}

export default App;




// class App extends Component {
//   render() {

//     console.log(Data)
//   return (
//     <Container maxWidth="sm" style={{background: `#f0f0f7 url('./assets/Design_desktop.png') no-repeat fixed center`}}>
//           {Data.map(post =>
//               <Grid container sm={12}>
//                 <Grid item>
//                 {post.dateTime}
//                 {post.user.name}
//                 </Grid>
//                 <Grid item>
//                 {post.dateTime}
//                 </Grid>
              
//               {/* <p>{post.user.image}</p> */}

//               <p>{post.vote.votes}</p>
//               <p href={post.url}>
//                 {post.title}
//                 {post.snippet}
//               </p>
//               <p>{post.university} * {post.course}</p>
//               <p>{post.views}</p>
//               <p>{post.downloads}</p> 
//               </Grid>
//           )}

//     </Container>

//   );
//           }
// }

// export default App;
