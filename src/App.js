import React from 'react'

import { CssBaseline, colors, createTheme, StyledEngineProvider } from '@mui/material'

import { ThemeProvider } from '@emotion/react'

import AddTaskModal from './components/AddTaskModal'
import DateTime from './components/DateTime'
import History from './components/History'

const theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: colors.deepPurple[400]
        }
      }
    }
  },
  palette: {
    primary: colors.deepPurple,
    background: {
      default: '#3B3F69'
    }
  }
})

export default function App () {
  const [showTime, setShowTime] = React.useState(true)

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <div className='test-div big-text'>
            {showTime && <DateTime />}
            {/* <AddTaskModal toggleShowTime={() => setShowTime(!showTime)} /> */}
            <History />
          </div>
        </CssBaseline>
      </ThemeProvider>
    </StyledEngineProvider>
  )
}
