
//react-router animation
import ReactCSSTransitionGroup from "react-addons-css-transition-group";


class Modal extends React.Component {
    closeBgModal (e) {
        if (e.target == e.currentTarget) {
            this.closeChildModal();
        }
    }
    
    render (content, s) {
        let style = {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: this.props.isOpen ? 'flex' : 'none',
            flexDirection: 'column-reverse',
            alignItems: 'stretch',
            justifyContent: 'center',
            position: 'fixed',
            top: '0',
            right: '0',
            left: '0',
            bottom: '0'
        };

        return <div style={{...style, ...s}} onClick={this.closeBgModal.bind(this)} >
                {content.props.children}
        </div>;
    }
}

export default Modal;