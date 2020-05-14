import React, { Component } from "react";
import CustomizedTables from "./CustomizedTables";
import { bindActionCreators } from "redux";
import * as cvActions from "../../redux/actions/cvActions";
import { connect } from "react-redux";
import alertify from "alertifyjs";
import { Button } from "reactstrap";

function saveByteArray(reportName, byte) {
    var blob = new Blob([byte], {type: "application/pdf"});
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    var fileName = reportName;
    link.download = fileName;
    link.click();
};
class cvDetail extends Component {
  componentDidMount() {
    this.props.actions.getCv(this.props.match.params.personId);
  }
  
  onClic = (pdf) => {
    saveByteArray("PoldyCv", pdf);
    alertify.success("Dosya başarıyla indirildi");
  };
  render() {
    return (
      <div>
        {console.log(this.props.cv)}
        <CustomizedTables person={this.props.cv} />
        <Button color="success" onClick={() => this.onClic(this.props.cv.cvPdf)}>
          Pdf İndir
        </Button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    cv: state.cvListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCv: bindActionCreators(cvActions.getById, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(cvDetail);
