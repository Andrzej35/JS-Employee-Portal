import fetch from 'isomorphic-unfetch'
import PropTypes from 'prop-types'

class EmployeeDetails extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            user : {
                _id: this.props.data._id,
                name: this.props.data.name,
                gender: this.props.data.gender,
                company: this.props.data.company,
                email: this.props.data.email,
                phone_no: this.props.data.phone_no,
                address: this.props.data.address,
                desc: this.props.data.desc
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleOnChage = this.handleOnChage.bind(this)
    }

    handleSubmit (e, data) {
        e.preventDefault()
        const user = {
            _id: this.props.data._id,
            name: data.name,
            gender: data.gender,
            company: data.company,
            email: data.email,
            phone_no: data.phone_no,
            address: data.address,
            desc: data.desc
        }

        return fetch(`/api/employees/${user._id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)

        }).then(res => {
            alert('Users successfuly updated')
            window.location.href = '/'
            return res
        }).catch(error => console.log('ERROR', error))
    }

    handleOnChage(e) {
        const user = {[e.target.name]: e.target.value}
        const newUser = Object.assign({}, {...this.state.user}, user)
        this.setState({user: newUser})
    }

    render() {
        const { show, form, showForm, hideForm, hideModal, data} = this.props
        const { user } = this.state
        const showHideClass = show ? 'modal show-modal' : 'modal hide-modal'
        const tableData = (
            <table className="table table-striped">
                    <thead className="thead-dark">
                       <tr>
                            <th>Company: </th>
                            <th>{data.company}</th>
                        </tr>
                    </thead>
            <tbody>
                <tr>
                    <td>Name: </td>
                    <td><strong>{data.name}</strong></td>
                </tr>
                <tr>
                    <td>Gender: </td>
                    <td>{data.gender}</td>
                </tr>
                <tr>
                    <td>Email: </td>
                    <td>{data.email}</td>
                </tr>
                <tr>
                    <td>Phone: </td>
                    <td>{data['phone_no']}</td>
                </tr>
                <tr>
                    <td>Description: </td>
                    <td>{data.desc}</td>
                </tr>
            </tbody>
            </table>
        )
        const formTableData = (
            <form onSubmit={(e) => this.handleSubmit(e, this.state.user)}>
                <table className="table table-striped">
                    <thead className="thead-dark">
                       <tr>
                            <th>Company: </th>
                            <th><input name="company" className="client-input" value={user.company} onChange={this.handleOnChage} /></th>
                        </tr>
                    </thead>
                <tbody>
                <tr>
                    <td>Name: </td>
                    <td><strong><input name="name" style={{width: '100%', border: 'none', color: '#aaa'}} value={user.name} onChange={(e) => this.handleOnChage(e)} /></strong></td>
                </tr>
                <tr>
                    <td>Gender: </td>
                    <td><input name="gender" style={{width: '100%', border: 'none', color: '#aaa'}}  value={user.gender} onChange={(e) => this.handleOnChage(e)} /></td>
                </tr>
                <tr>
                    <td>Email: </td>
                    <td><input name="email" style={{width: '100%', border: 'none', color: '#aaa'}} value={user.email} onChange={(e) => this.handleOnChage(e)} /></td>
                </tr>
                <tr>
                    <td>Phone: </td>
                    <td><input name="phone_no" style={{width: '100%', border: 'none', color: '#aaa'}} value={user.phone_no} onChange={(e) => this.handleOnChage(e)} /></td>
                </tr>
                <tr>
                    <td>Description: </td>
                    <td><textarea name="desc" style={{width: '100%', border: 'none', color: '#aaa'}} value={user.desc} onChange={(e) => this.handleOnChage(e)}></textarea></td>
                </tr>
                </tbody>
                </table>
                <button type="submit" style={{float: 'right'}}>Submit changes</button>
            </form>
        )
        return (
            <div className={showHideClass}>

                <div className="modal-body">

                {!form ? tableData : formTableData}

                <button className="button-close" onClick={() => hideModal()}><i className="material-icons">close</i></button>
                {!form ? <button onClick={() => showForm()}>Edit</button> : null }
                {}
                {form ? <div><button onClick={() => hideForm()}>Cancel</button></div> : null}
                </div>

                <style jsx>
                {`
                    .modal {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: rgba(0, 0, 0, 0.6);
                        transition-property: top, left;
                        transition-duration: 1s, 1s;
                        transition-delay: 0s, 1s;
                    }
                    .modal-body {
                        position: fixed;
                        background: #fff;
                        width: 60%;
                        height: auto;
                        top: 50%;
                        left:50%;
                        transform: translate(-50%, -50%);
                        padding-top: 52px;
                    }
                    .table {
                        padding-top: 20px;
                    }
                    .show-modal {
                        display: block;
                    }
                    .hide-modal {
                        display: none;
                    }
                    .button-close {
                        position: fixed;
                        top: 10px;
                        right: 10px;
                        border: none;
                        background: none;
                        outline: none;
                    }
                    td input, td textarea {
                        width: 100% !important;
                        border: none !important;
                    }
                    input.client-input {
                        width: 100%;
                        border: none;
                        color: #aaa;
                    }
                `}
                </style>
            </div>
        )
    }
}

EmployeeDetails.propTypes = {
    show: PropTypes.bool.isRequired,
    form: PropTypes.bool.isRequired,
    showForm: PropTypes.func.isRequired,
    hideForm: PropTypes.func.isRequired,
    hideModal: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired
}

export default EmployeeDetails
