//React specific
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { Link } from 'react-router-dom';
//Third party
import _ from 'lodash';
//Local
import { fetchPosts } from '../actions';


class PostsIndex extends React.Component {
        constructor(props) {
            super(props);
        }
        componentDidMount = () => {
            this.props.fetchPosts();
        }

        renderPosts = () => {
return _.map(this.props.posts, (post) => {
return <li className="list-group-item" key={post.id}>{post.title}</li>
});
    }
        render() {
            return ( 
                <div>
                <div className='text-xs-right'>
                <Link className='btn btn-primary' to="/posts/new">Add Post</Link></div>
            <div> 
                <h3>Posts</h3>
                <ul className="list-group">{this.renderPosts()}</ul> 
            </div>
            </div>
            );
            }
        }

const mapStateToProps = (state, ownProps) => {
return {
    posts : state.posts
}
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({fetchPosts : fetchPosts}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex)
