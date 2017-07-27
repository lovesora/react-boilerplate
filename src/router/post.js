import Post from '../components/post/post.controller.js';


export default class PostRoute extends React.Component {
    render() {
        return <div>
                <Post name={this.props.params.name} />
            </div>;
    }
}
