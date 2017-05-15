import { Component } from 'react';
import { connect } from 'vitaminjs/react-redux';

import { getPosts } from '../actions/posts';
import BlogPost from "./BlogPost";

class BlogHome extends Component {
    componentWillMount() {
        this.props.getPosts();
    }

    render() {
        if (!this.props.isFetching) {
            return (
                <div>
                    {
                        this.props.posts
                            .map(post => <BlogPost key={post.id} post={post} />)
                    }
                </div>
            );
        } else {
            return (
                <div>
                    Loading...
                </div>
            )
        }
    }
}

const mapStateToProps =  ({ posts: { isFetching, posts } }) => ({
    isFetching,
    posts,
});

export default connect(mapStateToProps, { getPosts })(BlogHome);