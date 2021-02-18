import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  titleFont:{
      '&.MuiTypography-body1':{
        // fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 24,
        
        color: '#FFFFFF'
      }
      
  },
  imageBack:{
    background: "#526BC6",
borderRadius: "10px",
// margin:'25px 45px',
  },
  imageGrid:{
    padding:41
  },
  avatarMargin:{
    paddingTop:"15px",
    textAlign:"center"
  },
  btnMargin:{
    padding:"30px",
    textAlign:'center'
  },
  alignRight:{
    textAlign:'right'
  },
  alignLeft:{
    textAlign:'left'
  },
  blueButton:{
    '&.MuiButton-root':{
      color:'#FFF',
      borderRadius:25
    },
    '&.MuiButton-outlined':{
      border: '2px solid #FFF',
    },
    '& .MuiButton-label':{
      padding:'6px'
    }
  },
  paddingTop:{
    paddingTop:95
  },
  whiteButton:{
    '&.MuiButton-root':{
      background:'#fff',
      color:'#526BC6',
      borderRadius:25
    },
    '&.MuiButton-outlined':{
      border: '2px solid #526BC6',
    },
    '& .MuiButton-label':{
      padding:'6px'
    }
  },
  headingFont:{
    '&.MuiTypography-body1':{
      // fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 36,
      padding:'15px 40px',
      color: '#FFFFFF'
    }
    
},
headingTitleFont:{
  '&.MuiTypography-body1':{
    // fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 24,
    padding:'0px 40px',
    color: '#FFFFFF'
  }
  
},
editBtnMargin:{
  textAlign:"center",
  marginTop:20
},
regFont:{
  '&.MuiTypography-body1':{
    // fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    padding:'15px 40px',
    color: '#FFFFFF'
  }
  
},
regDateFont:{
  '&.MuiTypography-body1':{
    // fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    padding:'15px 0px',
    color: '#FFFFFF'
  }
  
},
  titleFontContact:{
    '&.MuiTypography-body1':{
      // fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: 24,
      margin:'25px 0px 5px',
      color: '#FFFFFF'
    },
    
},
errPadding:{
  padding: "5px 64px"
},
errPaddingFields:{
  padding:"0px 15px 10px"
},
  textField:{
    '& .MuiInputBase-input':{
      padding:'15px 15px'
    },
      '& .MuiTypography-colorTextSecondary':{
        color:'#000',
        padding:"0px 40px"
      },
    background: '#FFFFFF',
borderRadius: 25,
width:'100%',
borderBottom: '0px',
margin:'5px 0px',
height: 45,
  },
  textFieldMarginBottom:{
    '& .MuiInputBase-input':{
      padding:'15px 15px'
    },
      '& .MuiTypography-colorTextSecondary':{
        color:'#000',
        padding:"0px 40px"
      },
    background: '#FFFFFF',
borderRadius: 25,
width:'100%',
borderBottom: '0px',
margin:'5px 0px',
height: 45,
marginBottom:15
  }
}));
