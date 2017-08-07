import PostComponent from '../components/post/post';

export default class PostRoute extends React.Component {
    render () {
        return <div>
            <PostComponent id={this.props.params.id} />
        </div>;
    }
}
