import PostView from './post.view.js';

export default class PostController extends React.Component {

    render() {
        return <div>
            <PostView name={this.props.name} />
        </div>;
    }
}