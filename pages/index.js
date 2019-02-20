import fetch from 'isomorphic-unfetch'

import Head from '../components/head'
import Employee from '../components/employee'
import EmployeeDetail from '../components/employee-detail'

class Index extends React.Component {
    state = {
        users: null
    }
    static async getInitialProps() {
        const res = await fetch('http://localhost:3000/api/employees')
        const employees = await res.json()
        return employees
    }

    componentWillMount() {
        this.setState({
            users: Object.keys(this.props).filter(x=> x !== 'url').map(x => this.props[x])
        })
    }

    render() {
        if(this.props.employees) {
            return '...loading'
        }
        return (
            <div>
                <Head />
                <div className="container">
                    <div className="row cac">
                        <h1>Employee portal</h1>
                    </div>
                    <div className="row row-eq-height">
                        {this.state.users
                            .map((employee, index) =>
                                <React.Fragment key={employee._id} >
                                    <Employee
                                        index={index}
                                        data={employee}
                                        {...this.props}
                                    />


                                </React.Fragment>
                            )
                        }
                    </div>

                </div>
                <style jsx>{`
                    .cac {
                        align-items: center;
                        justify-content: center;
                    }
                `}</style>
            </div>
        )
    }
}
export default Index
