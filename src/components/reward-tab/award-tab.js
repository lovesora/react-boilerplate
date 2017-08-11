//redux
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {changeActiveTab} from '../../redux/actions/ac_tab';


class AwardTab extends React.Component {
    render () {
        let style = {
            container: {
                height: '6rem',
                display: 'flex',
                justifyContent: 'space-around'
            },
            tab: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                padding: '0 .5rem 0 .5rem',
                borderBottom: '.2rem solid rgba(0 , 0, 0, 0)',
                transitionProperty: 'color,border-bottom',
                transitionDuration: '.375s'
            },
            active: {
                color: '#FB5E09',
                borderBottom: '.2rem solid #FB5E09'
            }
        }

        this.tabs = [];

        for (let i=0; i<this.props.data.length; i++) {
            this.tabs[i] = <div style={this.props.attr.active != i ? style.tab : {...style.tab, ...style.active}} onClick={() => {
                this.props.changeActiveTab(i);
            }}>
                {this.props.data[i].name + '(' + this.props.data[i].data.length + ')'}
            </div>;
        }

        return <div style={style.container}>
            {this.tabs}
        </div>;
    }
}

let mapStateToProps = state => ({...{}, ...state.awardTab});

let mapDispatchToProps = dispatch => bindActionCreators({changeActiveTab}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AwardTab);