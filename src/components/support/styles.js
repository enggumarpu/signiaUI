import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  titleFont: {
    '&.MuiTypography-body1': {
      // fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 24,

      color: '#FFFFFF'
    }

  },
  large: {
    height: '180px',
    width: '180px',
    marginRight: 14,
  },
  uploadInput: {
    display: 'none',
  },
  imageBack: {
    background: "#526BC6",
    borderRadius: "10px",
    // margin:'25px 45px',
  },
  imageGrid: {
    padding: 41
  },
  avatarMargin: {
    paddingTop: "15px",
    textAlign: "center",
    display: 'flex',
    justifyContent: "center",
  },
  btnMargin: {
    padding: "30px",
    textAlign: 'center'
  },
  alignRight: {
    textAlign: 'right'
  },
  alignLeft: {
    textAlign: 'left'
  },
  blueButton: {
    '&.MuiButton-root': {
      color: '#FFF',
      borderRadius: 25,
      outline:'none'
    },
    '&.MuiButton-outlined': {
      border: '2px solid #FFF',
    },
    '& .MuiButton-label': {
      padding: '6px'
    },
  },
  uploadButton: {
    color: '#FFF',
    borderRadius: 25,
    border: '2px solid #FFF',
    padding: '12px 25px',
    cursor: "pointer"
  },
  paddingTop: {
    paddingTop: 95
  },
  whiteButton: {
    '&.MuiButton-root': {
      background: '#fff',
      color: '#526BC6',
      borderRadius: 25,
      outline:'none'
    },
    '&.MuiButton-outlined': {
      border: '2px solid #526BC6',
    },
    '& .MuiButton-label': {
      padding: '6px'
    }
  },
  headingFont: {
    '&.MuiTypography-body1': {
      // fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 36,
      padding: '15px 40px',
      color: '#FFFFFF'
    }

  },
  headingTitleFont: {
    '&.MuiTypography-body1': {
      // fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 24,
      padding: '0px 40px',
      color: '#FFFFFF'
    }

  },
  headingProjectFont:{
    '&.MuiTypography-body1': {
      // fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 24,
      padding: '0px 40px',
      color: '#FFFFFF',
      marginTop:50
    }

  },
  editBtnMargin: {
    textAlign: "center",
    marginTop: 20
  },
  regFont: {
    '&.MuiTypography-body1': {
      // fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 16,
      padding: '15px 40px',
      color: '#FFFFFF'
    }

  },
  regDateFont: {
    '&.MuiTypography-body1': {
      // fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 16,
      padding: '15px 0px',
      color: '#FFFFFF'
    }

  },
  titleFontContact: {
    '&.MuiTypography-body1': {
      // fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 24,
      margin: '25px 0px 5px',
      color: '#FFFFFF'
    },

  },
  errPadding: {
    padding: "5px 64px"
  },
  font64:{
    '&.MuiTypography-body1': {
      // fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 64,
      padding: '0px 40px',
      color: '#FFFFFF'
    }
  },
  progressPadding:{
    padding:"0px 42px"
  },
  font18Bold:{
    '&.MuiTypography-body1': {
      // fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 18,
      padding: '20px 0px',
      color: '#FFFFFF'
    }
  },
  padding24:{
    padding:"5px 0px 0px 35px",
    marginTop: 15,
  },
  font24Bold:{
    '&.MuiTypography-body1': {
      // fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 24,
      
      color: '#FFFFFF'
    }
  },
  font18:{
    '&.MuiTypography-body1': {
      // fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 18,
      padding: '20px 0px',
      color: '#FFFFFF'
    }
  },
  padding20:{
    padding:"20px 0px"
  },
  font24:{
    '&.MuiTypography-body1': {
      // fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 24,
      // padding: '20px 0px',
      color: '#FFFFFF'
    }
  },
  font26Bold:{
    '&.MuiTypography-body1': {
      // fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: 26,
      padding: '12px 0px 16px',
      color: '#FFFFFF'
    }
  },
  projectGrid:{
    display:"flex",
    alignItems:"flex-end"
  },
  errPaddingFields:{
    padding:"0px 15px 10px"
  },
  textField: {
    '& .MuiInputBase-input': {
      padding: '15px 15px'
    },
    '& .MuiTypography-colorTextSecondary': {
      color: '#000',
      padding: "0px 40px"
    },
    '&.MuiInput-underline:before': {
      borderBottom: 0
    },
    '&.MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottom: 0
    },
    '&.MuiInput-underline:after': {
      borderBottom: 0
    },
    background: '#FFFFFF',
    borderRadius: 25,
    width: '100%',
    borderBottom: '0px',
    margin: '5px 0px',
    height: 45,
  },
  textFieldMarginBottom: {
    '& .MuiInputBase-input': {
      padding: '15px 15px'
    },
    '& .MuiTypography-colorTextSecondary': {
      color: '#000',
      padding: "0px 40px"
    },
    background: '#FFFFFF',
    borderRadius: 25,
    width: '100%',
    borderBottom: '0px',
    margin: '5px 0px',
    height: 45,
    marginBottom: 15
  }
}));
