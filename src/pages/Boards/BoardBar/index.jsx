import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Button from '@mui/material/Button'

import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Tooltip from '@mui/material/Tooltip'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const MENU_STYLES = {
  color: 'primary.main',
  bgcolor: 'white',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'primary.main'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      borderTop: '1px solid #00bfa5'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip sx={MENU_STYLES} icon={<DashboardIcon />} label="kendystar147" onClick={() => { }} />
        <Chip sx={MENU_STYLES} icon={<VpnLockIcon />} label="Public/Private Workspace" onClick={() => { }} />
        <Chip sx={MENU_STYLES} icon={<AddToDriveIcon />} label="Add Google Drive" onClick={() => { }} />
        <Chip sx={MENU_STYLES} icon={<BoltIcon />} label="Automation" onClick={() => { }} />
        <Chip sx={MENU_STYLES} icon={<FilterListIcon />} label="Filter" onClick={() => { }} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button variant="outlined" startIcon={<PersonAddIcon />}>Invite</Button>
        <AvatarGroup max={7} sx={{
          '& .MuiAvatar-root': {
            width: 34,
            height: 34,
            fontSize: 16
          }
        }}>
          <Tooltip title="kendystar147">
            <Avatar alt="Kendystar147" src="https://picsum.photos/536/354" />
          </Tooltip>
          <Tooltip title="kendystar147">
            <Avatar alt="Kendystar147" src="https://picsum.photos/536/354" />
          </Tooltip>
          <Tooltip title="kendystar147">
            <Avatar alt="Kendystar147" src="https://picsum.photos/536/354" />
          </Tooltip>
          <Tooltip title="kendystar147">
            <Avatar alt="Kendystar147" src="https://picsum.photos/536/354" />
          </Tooltip>
          <Tooltip title="kendystar147">
            <Avatar alt="Kendystar147" src="https://picsum.photos/536/354" />
          </Tooltip>
          <Tooltip title="kendystar147">
            <Avatar alt="Kendystar147" src="https://picsum.photos/536/354" />
          </Tooltip>
          <Tooltip title="kendystar147">
            <Avatar alt="Kendystar147" src="https://picsum.photos/536/354" />
          </Tooltip>
          <Tooltip title="kendystar147">
            <Avatar alt="Kendystar147" src="https://picsum.photos/536/354" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar