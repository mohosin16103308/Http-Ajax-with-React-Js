import React, { Component } from 'react';

import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {
        posts :[],
        postselectedid:null
    }

componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => 
    
    {
        console.log(response.data);
        this.setState(
            {
                posts:response.data
               
            }
        );
    }
  )
}

postSelectedHandler = (id) =>{
  this.setState({postselectedid:id});
}





    render () {

        const posts = this.state.posts.map(post => {
               
                       return <Post key={post.id} title={post.title}  author={post.author} postSelected={() => this.postSelectedHandler(post.id)}/>
               
                });

        
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.postselectedid}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;