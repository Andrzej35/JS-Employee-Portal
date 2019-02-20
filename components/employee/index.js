import PropTypes from 'prop-types'

import ButtonMore from '../button'
import EmployeeDetail from '../employee-detail'

class Employee extends React.PureComponent {

    state = {
        show: false,
        form: false
    }

    showModal() {
        this.setState({show: true})
    }
    hideModal() {
        this.setState({show: false, form: false})
    }
    showForm() {
        this.setState({form: true})
    }
    hideForm() {
        this.setState({form: false})
    }
    render() {
        return (
            <div className="col-md-4 col-sx-12">
                <div className="card p-4 m-1">
                    <div className="card-body">
                        <h5 className="card-title">Name: {this.props.data.name}</h5>
                        <p className="small">Email: {this.props.data.email}</p>
                        <p>Company: {this.props.data.company}</p>
                        <ButtonMore showModal={this.showModal.bind(this)} />
                    </div>
        <p>{this.state.form}</p>
                    <EmployeeDetail show={this.state.show} form={this.state.form} data={this.props.data} showForm={this.showForm.bind(this)} hideForm={this.hideForm.bind(this)} hideModal={this.hideModal.bind(this)} />
                </div>
            </div>
        )
    }
}

Employee.propTypes = {
    data: PropTypes.object
}

export default Employee
