import { Link } from 'react-router';

export default class PostView extends React.Component {
    render() {
        return <div>
            Hello {this.props.name}
            <br/>
            <Link to='/'>return homepage</Link>
        </div>;
    }
}