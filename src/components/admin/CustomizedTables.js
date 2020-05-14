import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


export default function CustomizedTables({ person }) {

  
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
      <TableHead>
          <TableRow>
            <StyledTableCell>Kişisel Bilgiler</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
            Ad  = 
            </StyledTableCell>
            <StyledTableCell component="th" scope="row">
            {person.firstName}
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
            Soyad  = 
            </StyledTableCell>
            <StyledTableCell component="th" scope="row">
            {person.lastName}
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
            Doğum Yeri  = 
            </StyledTableCell>
            <StyledTableCell component="th" scope="row">
              {person.placeOfBirth}
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
            Medeni Durum  = 
            </StyledTableCell>
            <StyledTableCell component="th" scope="row">
              {person.marialStatus?"Evli":"Bekar"}
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
        <TableHead>
          <TableRow>
            <StyledTableCell>Eğitim Bilgileri</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
            Öğrenim Seviyesi  = 
            </StyledTableCell>
            <StyledTableCell component="th" scope="row">
            {person.educationStatus}
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
            Okul Adı  = 
            </StyledTableCell>
            <StyledTableCell component="th" scope="row">
            {person.school}
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
            Okul Başlangıç  = 
            </StyledTableCell>
            <StyledTableCell component="th" scope="row">
              {person.schoolStart}
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
            Okul Bitiş  = 
            </StyledTableCell>
            <StyledTableCell component="th" scope="row">
            {person.schoolFinish}
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
        <TableHead>
          <TableRow>
            <StyledTableCell>İletişim Bilgileri</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
            Telefon Numarası  = 
            </StyledTableCell>
            <StyledTableCell component="th" scope="row">
            {person.mobilTelefonNumber}
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
            Mail Adresi  = 
            </StyledTableCell>
            <StyledTableCell component="th" scope="row">
            {person.mail}
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
            Adres  = 
            </StyledTableCell>
            <StyledTableCell component="th" scope="row">
              {person.address}
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
        <TableHead>
          <TableRow>
            <StyledTableCell>Yabancı Dil Bilgileri</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
            Yabancı Dil  = 
            </StyledTableCell>
            <StyledTableCell component="th" scope="row">
            {person.foreignLanguage}
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
            Yabancı Dil Seviye  = 
            </StyledTableCell>
            <StyledTableCell component="th" scope="row">
            {person.foreignLanguageLevel}
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
        <TableHead>
          <TableRow>
            <StyledTableCell>Diğer Bilgileri</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
            Yetkinlikler  = 
            </StyledTableCell>
            <StyledTableCell component="th" scope="row">
            {person.competences}
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
            Referanslar = 
            </StyledTableCell>
            <StyledTableCell component="th" scope="row">
            {person.reference}
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
      <br/>
      
    </TableContainer>
    
  );
}
