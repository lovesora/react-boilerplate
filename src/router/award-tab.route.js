//components
import AwardTab from '../components/reward-tab/award-tab';
import AwardContainer from '../components/reward-tab/award-container';
import ModalAwardDesc from '../components/modal/modal-award-desc';


//ajax
import url from '../server/restful-api';


//redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getAwardsListData} from '../redux/actions/ac_tab';



class AwardTabRoute extends React.Component {
    componentWillMount () {
        let interval = setInterval(() => {
            if (this.props.campaignUserId < 0) {
                return;
            } else {
                clearInterval(interval);
            }
            
            let api = url.awards.list.url.replace('{campaignId}', this.props.campaignId) + `?campaignUserId=${this.props.campaignUserId}&F-Session=${this.props.token}`;
            fetch(api, {
                method: url.awards.list.type
            })
            .then(response => response.json())
            .then(json => {
                if (0 == json.code) {
                    this.props.getAwardsListData(json.data);
                } else {
                    console.log(json);
                }
            })
            .catch(e => {
                console.log(e);
            });
        }, 100);
    }
    
    render () {
        let style = {
            container: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'stretch',
                minHeight: '100%'
            }
        }
        
        return <div style={style.container}>
            <AwardTab/>
            <AwardContainer/>
            <ModalAwardDesc/>
        </div>;
    }
}


let mapStateToProps = state => ({...state.appConfigs.initData});


let mapDispatchToProps = dispatch => bindActionCreators({getAwardsListData}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AwardTabRoute);