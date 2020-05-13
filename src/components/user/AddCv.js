import React, { Component } from "react";
import { connect } from "react-redux";
import * as userAction from "../../redux/actions/userAction";
import { bindActionCreators } from "redux";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  CustomInput,
  Button,
} from "reactstrap";

class AddCv extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      birthofDate: "",
      placeOfBirth: "",
      maritalStatus: "",
      educationStatus: "",
      school: "",
      schoolStart: "",
      schoolFinish: "",
      address: "",
      mobilTelefonNumber: "",
      mail: "",
      foreignLanguage: "",
      foreignLanguageLevel: "",
      competencens: "",
      refrence: "",
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      personID:2006,//USER GİRİŞ YAPTIĞINDA GİRİŞ YAPAN USER'IN ID BURAYA GELECEK
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      birthofDate: this.state.birthofDate,
      placeOfBirth: this.state.placeOfBirth,
      maritalStatus: this.state.maritalStatus,
      educationStatus: this.state.educationStatus,
      school: this.state.school,
      schoolStart: this.state.schoolStart,
      schoolFinish: this.state.schoolFinish,
      address: this.state.address,
      mobilTelefonNumber: this.state.mobilTelefonNumber,
      mail: this.state.mail,
      foreignLanguage: this.state.foreignLanguage,
      foreignLanguageLevel: this.state.foreignLanguageLevel,
      competencens: this.state.competencens,
      refrence: this.state.refrence,
    };
    
    this.props.action.userAddCv(userData,1);//burada ki bir id değerini test etmek için verdim 
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <h3>Cv Bilgilerinizi Doldurun</h3>
        <Container className="App">
          <Row>
            <Col>
              <Form onSubmit={this.onSubmit}>
                <Col>
                  <FormGroup>
                    <Label htmlFor="firstName" id="firstName">
                      Adınız :
                    </Label>
                    <Input
                      name="firstName"
                      type="text"
                      placeholder="Adınız"
                      htmlFor="firstName"
                      value={this.state.firstName}
                      onChange={this.onChange}
                    />
                  </FormGroup>
                </Col>
                        <h3>{this.state.firstName}</h3>
                <Col>
                  <FormGroup>
                    <Label htmlFor="lastName" id="lastName">
                      Soyadınız :
                    </Label>
                    <Input
                      name="lastName"
                      type="text"
                      placeholder="Soy adınız"
                      htmlFor="lastName"
                      value={this.state.lastName}
                      onChange={this.onChange}
                    />
                  </FormGroup>
                </Col>
                <h3>{this.state.lastName}</h3>

                <Col>
                  <FormGroup>
                    <Label for="birthofDate">Doğum Tarihi</Label>
                    <Input
                      type="date"
                      name="birthofDate"
                      htmlFor="birthofDate"
                      id="exampleDate"
                      placeholder="Doğum tarihiniz"
                      value={this.state.birthofDate}
                      onChange={this.onChange}
                    />
                  </FormGroup>
                </Col>
                <h3>{this.state.birthofDate}</h3>

                <Col>
                  <FormGroup>
                    <Label name="placeOfBirth" htmlFor="placeOfBirth" id="placeOfBirth">
                      Doğum yeriniz
                    </Label>
                    <Input
                      name="placeOfBirth"
                      type="text"
                      placeholder="placeOfBirth"
                      htmlFor="placeOfBirth"
                      value={this.state.placeOfBirth}
                      onChange={this.onChange}
                    />
                  </FormGroup>
                </Col>
                <h3>{this.state.placeOfBirth}</h3>

                <Col>
                  <FormGroup>
                    <Label  name="maritalStatus" htmlFor="maritalStatus">Medeni Durum</Label>

                    <CustomInput
                      type="select"
                      id="maritalStatus"
                      name="maritalStatus"
                      htmlFor="maritalStatus"
                      value={this.state.maritalStatus}
                      onChange={this.onChange}
                    >
                      <option value="">Evli misiniz ?</option>
                      <option value="true">Evet</option>
                      <option value="false">Hayır</option>
                    </CustomInput>
                  </FormGroup>
                </Col>
                <h3>{this.state.maritalStatus}</h3>

                <Col>
                  <FormGroup>
                    <Label  name="educationStatus" htmlFor="educationStatus" id="educationStatus">
                      Eğitim Durumunuz
                    </Label>
                    <Input
                      name="educationStatus"
                      type="text"
                      placeholder="Education Status"
                      htmlFor="educationStatus"
                      value={this.state.educationStatus}
                      onChange={this.onChange}
                    />
                  </FormGroup>
                </Col>
                <h3>{this.state.educationStatus}</h3>

                <Col>
                  <FormGroup>
                    <Label  name="school" htmlFor="school" id="school">
                      Okulunuz
                    </Label>
                    <Input
                      name="school"
                      type="text"
                      placeholder="Okuduğunuz Okul "
                      htmlFor="school"
                      value={this.state.school}
                      onChange={this.onChange}
                    />
                  </FormGroup>
                </Col>
                <h3>{this.state.school}</h3>

                <Col>
                  <FormGroup>
                    <Label  name="schoolStart" htmlFor="schoolStart">Okula Başlangıç Tarihi</Label>
                    <Input
                      type="date"
                      name="schoolStart"
                      htmlFor="schoolStart"
                      id="schoolStart"
                      placeholder="Başlama Tarihi"
                      value={this.state.schoolStart}
                      onChange={this.onChange}
                    />
                  </FormGroup>
                </Col>
                <h3>{this.state.schoolStart}</h3>

                <Col>
                  <FormGroup>
                    <Label name="schoolFinish" htmlFor="schoolFinish">Okula Bitiş Tarihi</Label>
                    <Input
                     htmlFor="schoolFinish"
                      type="date"
                      name="schoolFinish"
                      id="schoolFinish"
                      placeholder="Bitiş Tarihi"
                      value={this.state.schoolFinish}
                      onChange={this.onChange}
                    />
                  </FormGroup>
                </Col>
                <h3>{this.state.schoolFinish}</h3>

                <Col>
                  <FormGroup>
                    <Label name="address" htmlFor="address" id="address">
                      Adresiniz
                    </Label>
                    <Input
                      name="address"
                      type="textarea"
                      placeholder="Adresiniz "
                      htmlFor="address"
                      value={this.state.address}
                      onChange={this.onChange}
                    />
                  </FormGroup>
                </Col>
                <h3>{this.state.address}</h3>

                <Col>
                  <FormGroup>
                    <Label
                      name="mobilTelefonNumber"
                      htmlFor="mobilTelefonNumber"
                      id="mobilTelefonNumber"
                    >
                      Telefon Numarası
                    </Label>
                    <Input
                      name="mobilTelefonNumber"
                      type="tel"
                      placeholder="Telefon Numaranız "
                      htmlFor="mobilTelefonNumber"
                      value={this.state.mobilTelefonNumber}
                      onChange={this.onChange}
                    />
                  </FormGroup>
                </Col>
                <h3>{this.state.mobilTelefonNumber}</h3>

                <Col>
                  <FormGroup>
                    <Label name="mail" htmlFor="mail" id="mail">
                      Email
                    </Label>
                    <Input
                      name="mail"
                      type="email"
                      placeholder="E posta adresiniz "
                      htmlFor="mail"
                      value={this.state.mail}
                      onChange={this.onChange}
                    />
                  </FormGroup>
                </Col>
                <h3>{this.state.mail}</h3>

                <Col>
                  <FormGroup>
                    <Label
                      name="foreignLanguage"
                      htmlFor="foreignLanguage"
                      id="foreignLanguage"
                    >
                      Yabancı Dil
                    </Label>
                    <Input
                      name="foreignLanguage"
                      type="text"
                      placeholder="Yabancı dil"
                      htmlFor="foreignLanguage"
                      value={this.state.foreignLanguage}
                      onChange={this.onChange}
                    />
                  </FormGroup>
                </Col>
                <h3>{this.state.foreignLanguage}</h3>

                <Col>
                  <FormGroup>
                    <Label
                      name="foreignLanguageLevel"
                      htmlFor="foreignLanguageLevel"
                      id="foreignLanguageLevel"
                    >
                      Yabancı Dil
                    </Label>

                    <CustomInput
                      id="foreignLanguageLevel"
                      name="foreignLanguageLevel"
                      type="select"
                      htmlFor="foreignLanguageLevel"
                      value={this.state.foreignLanguageLevel}
                      onChange={this.onChange}
                    >
                      <option value="">Seviye</option>
                      <option>Başlangıç</option>
                      <option>Orta</option>
                      <option>İleri</option>
                    </CustomInput>
                  </FormGroup>
                </Col>
                <h3>{this.state.foreignLanguageLevel}</h3>

                <Col>
                  <FormGroup>
                    <Label
                      name="competencens"
                      htmlFor="competencens"
                      id="competencens"
                    >
                      Yetkinlikler
                    </Label>
                    <Input
                      name="competencens"
                      type="textarea"
                      placeholder="Yetenek ve Özellikleriniz "
                      htmlFor="competencens"
                      value={this.state.competencens}
                      onChange={this.onChange}
                    />
                  </FormGroup>
                </Col>
                <h3>{this.state.competencens}</h3>

                <Col>
                  <FormGroup>
                    <Label name="refrence" htmlFor="refrence" id="refrence">
                      Referanslarınız
                    </Label>
                    <Input
                      name="refrence"
                      type="textarea"
                      placeholder="Referenslarınız ve iletişim bilgileri "
                      htmlFor="refrence"
                      value={this.state.refrence}
                      onChange={this.onChange}
                    />
                  </FormGroup>
                </Col>
                <h3>{this.state.refrence}</h3>

                <Button color="success" type="submit">Submit</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userCv: state.userAddCvReducer,
  };
}
function mapDispatchToProps(dispatch) {
    return {
      action: {
        userAddCv: bindActionCreators(userAction.userAddCv, dispatch),
      },
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(AddCv);
