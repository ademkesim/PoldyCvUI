import React, { Component } from 'react'
import { connect } from "react-redux";
import * as titleActions from "../../redux/actions/titleActions";
import * as departmentActions from "../../redux/actions/departmentActions";
import { bindActionCreators } from "redux";
import {
    Table,
    Button
} from "reactstrap";
import { Link } from "react-router-dom";



class TitleList extends Component {
  
     
    componentDidMount() {
        this.props.actions.getDepartments();
        this.props.actions.getTitles();
      
        
     
    }
    departmentComparison(id,id2){

        var name={
          departman : this.props.departments.map(dep=>dep.departmentId===id?dep.name:""),
          title : this.props.titles.map(title=>title.titleId===id2?title.titleName:""),
        }
        return name
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
                        {this.props.titles.map(title => (
                            <tr key={title.titleId}>
                                <th scope="row">{title.titleId}</th>
                               
                                <td>{this.departmentComparison(title.departmentId,title.titleId).departman}</td>
                                <td>{this.departmentComparison(title.departmentId,title.titleId).title}</td>
                                <td>
                                    <Button color="success"onClick={()=>this.props.actions.deleteTitle(title)} >
                                        Sil
                                     </Button>
                                </td>
                                <td>
                                <Link to={"update-title/"+title.titleId}><Button color="warning">Güncelle</Button></Link>
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

        titles: state.titleListReducer,
        departments:state.departmentListReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {

            getTitles: bindActionCreators(
                titleActions.getTitles,
                dispatch
            ),
            deleteTitle:bindActionCreators(titleActions.deleteTitle,dispatch),
            getDepartments:bindActionCreators(departmentActions.getDepartments,dispatch)

        },
    };
}
export default connect(
    mapStateToProps, mapDispatchToProps
)(TitleList)