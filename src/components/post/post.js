import {imgs} from '../../assets/index';
import {getUserData} from '../../server/fetch/user.fetch';


class PostComponent extends React.Component {
    constructor (...args) {
        super(args);

        this.srvGetUserData();
    }
    
    async srvGetUserData() {
        try {
            let user = await getUserData();
            console.log(user);
        } catch (e) {
            console.log(e);
        }
    }
    
    render () {
        let style = {
            img: {
                width: '50%',
                float: 'left'
            }
        }

        return <div>
            <p>{this.props.id}</p>
            <img style={style.img} src={imgs.png.js} alt="js"/>
            <img style={style.img} src={imgs.png.css} alt="css"/>
        </div>;
    }
}

export default PostComponent;