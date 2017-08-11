//redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {changeActiveTab} from '../../redux/actions/ac_tab';


//component
import AwardLottery from './award-lottery';


//react-router animation
import ReactCSSTransitionGroup from "react-addons-css-transition-group";


class AwardContainer extends React.Component {
    render () {
        let style = {
            container: {
                flexGrow: '1',
                backgroundColor: 'rgba(153, 153, 153, .1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch'
            },
            lottery: {
                container: {
                    height: '8rem',
                    margin: '1rem 1rem 0 1rem',
                    backgroundColor: 'red'
                }
            }
        }
        
        
        return <div style={style.container}>
            <ReactCSSTransitionGroup
                transitionName="fadeWrapper"
                transitionEnterTimeout={ 500 }
                transitionLeaveTimeout={ 500 }
            >
                {this.props.data[this.props.attr.active].data.map((v, k) => <AwardLottery uiType={this.props.data[this.props.attr.active].uiType} data={this.props.data[this.props.attr.active].data[k]} attr={this.props.attr}/>)}
            </ReactCSSTransitionGroup>
        </div>;
    }
}


let mapStateToProps = state => ({...state.awardTab});

let mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AwardContainer);