import Reactm, { Component } from 'react'
import ContainerModal from '../HOC/ContainerModal'
import ModalHOC from '../HOC/ModalHOC'
import { store } from '../redux/configStore'
import { openPopupAction } from '../redux/reducers/modalReducer'
import Home from './Home'
import Login from './Login'

export default class HOCdemo extends Component {
    state = {
        component: <Home />
    }
    render() {
        const ModalComponent = ModalHOC(this.state.component);
        return (
            <div className='container'>
                <h3>Demo popup moda (HOC)</h3>
                {/* Modal trigger button */}
                <button type="button" className="btn btn-primary btn-lg mx-2" onClick={async () => {
                    await this.setState({
                        component: < Login />
                    });
                    const action = openPopupAction(<Login/>)
                     //dispatch(action);
                     store.dispatch(action);

                    document.getElementById('modal-click').click();
                }}>
                    Login
                </button>
                {/* Modal trigger button */}
                <button type="button" className="btn btn-primary btn-lg mx-2" onClick={async () => {
                    await this.setState({
                        component: <Home />
                    });

                    const action = openPopupAction(<Home/>)
                     //dispatch(action);
                     store.dispatch(action);

                    document.getElementById('modal-click').click();

                }}>
                    Home
                </button>
                <button data-bs-toggle="modal" data-bs-target="#modalId" id='modal-click' className='d-none'></button>
                {/* <ModalComponent /> */}
                {/* <ContainerModal component={this.state.component} /> */}
            </div>
        )
    }
}
