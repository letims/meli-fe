import StarsIcon from '@mui/icons-material/Stars'
import PersonIcon from '@mui/icons-material/Person'
import { Alert, Avatar, Box, Typography } from '@mui/material'
import { NoUserData } from '../assets/literals'

interface UserDetailsProps {
  userData: any
}

export default function UserDetails(props: UserDetailsProps) {
  if (props.userData) {
    const { firstName, lastName, imageSrc, level, restrictions } = props.userData
    const displayRestrictions = restrictions.map((r: any) => {
      return <Alert severity="warning">{r}</Alert>
    })

    return (
      <>
        <Box sx={{ display: 'flex', marginTop: '20px', background: 'palette.secondary' }}>
          <Avatar
            alt="Remy Sharp"
            src={imageSrc}
            sx={{ width: 128, height: 128 }}
          />
          <Box sx={{ flex: 1, marginLeft: '20px' }}>
            <Typography sx={{ mt: 1, mb: 1 }}>
              <PersonIcon sx={{ mr: 1, verticalAlign: 'middle'}}/>
              {firstName} {lastName}
            </Typography>
            <Typography sx={{ mt: 1, mb: 1 }}>
              <StarsIcon sx={{ mr: 1, verticalAlign: 'middle'}}/>
              {level}
            </Typography>
            {restrictions && (<Typography sx={{ mt: 2, mb: 1 }}>
              {displayRestrictions}
            </Typography>)}
          </Box>
        </Box>
      </>)
  }
  
  return (
    <Typography sx={{ mt: 1, mb: 1 }}>
      {NoUserData}
    </Typography>)
}