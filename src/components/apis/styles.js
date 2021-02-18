import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    // color:'#526BC6'
  },
  accordionHeading: {
    '&.MuiAccordionSummary-root': {
      borderRadius: 25,
      backgroundColor: '#1C348A',
      color: '#FFFFFF',
      border: '0',
      boxShadow: 'none',

      '& .MuiTypography-root': {
        fontWeight: 'bold',
        fontSize: '20px',
        lineHeight: '23px',
        color: '#526BC6',
      },
    },
    '& .MuiIconButton-root': {
      color: '#526BC6',
    },
  },
  accordionBackground: {
    '&.MuiAccordion-root.Mui-expanded': {
      backgroundColor: 'transparent',
      border: '0',
      boxShadow: 'none',
    },
    '&.MuiAccordion-rounded': {
      backgroundColor: 'transparent',
      margin: 20,
      border: '0',
      boxShadow: 'none',

      '&:before': {
        display: 'none',
      },
    },
  },
  accordionTitle: {
    color: '#FFFFFF',
    width: '100%',
  },
  profileUserImage: {
    height: 60,
    width: 60,
    borderRadius: 360,
    border: '1px solid #27AE60',
  },
  headingFont: {
    color: '#FFFFFF',
  },
  headingTitle: {
    fontSize: 22,
  },
}))
