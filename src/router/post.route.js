import PostController from '../app/post/post.controller';

export default class PostRoute extends React.Component {
    render () {
        return <div>
            <PostController id={this.props.params.id} />
        </div>;
    }
}
