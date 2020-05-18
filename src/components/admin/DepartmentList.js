import React, { Component } from 'react'
import { connect } from "react-redux";
import * as departmentActions from "../../redux/actions/departmentActions";
import { bindActionCreators } from "redux";
import {
    Table,
    Button
} from "reactstrap";
import { Link } from "react-router-dom";



class DepartmentList extends Component {
    deleteDepartment(department) {
        
        this.props.actions.deleteDepartments(department);
      
      }
     
    componentDidMount() {
        this.props.actions.getDepartments();
        
     
    }
  
  
    render() {
        return (
            <div>
                <h3>

                </h3>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Departmanlar</th>
                            <th>Kadrolar</th>

                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.departments.map(department => (
                            <tr key={department.departmentId}>
                                <th scope="row">{department.departmentId}</th>
                               
                                <td>{department.name}</td>
                                <td>{department.needs}</td>
                                <td>
                                    <Button color="success"onClick={()=>this.deleteDepartment(department)} >
                                        Sil
                                     </Button>
                                </td>
                                <td>
                                <Link to={"update-department/"+department.departmentId}><Button color="warning">Güncelle</Button></Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {

        departments: state.departmentListReducer,

    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {

            getDepartments: bindActionCreators(
                departmentActions.getDepartments,
                dispatch
            ),
            deleteDepartments:bindActionCreators(departmentActions.deleteDepartment,dispatch)

        },
    };
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(DepartmentList)