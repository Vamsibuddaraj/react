import type {Meta} from '@storybook/react-vite'
import Flash from './Flash'
import Octicon from '../Octicon'
import {AlertIcon, CheckCircleIcon, InfoIcon, XIcon} from '@primer/octicons-react'
import {Button, IconButton} from '../Button'
import Link from '../Link'
import Box from '../Box'

export default {
  title: 'Components/Flash/Features',
  component: Flash,
} as Meta<typeof Flash>

export const Success = () => (
  <Flash
    variant="success"
    sx={{
      display: 'grid',
      gridTemplateColumns: 'min-content 1fr minmax(0, auto)',
      gridTemplateAreas: `'visual message actions'`,
    }}
  >
    <Box sx={{display: 'grid', paddingBlock: 'var(--base-size-8)', alignSelf: 'start', gridArea: 'visual'}}>
      <Octicon icon={CheckCircleIcon} aria-label="Success" />
    </Box>
    <Box
      sx={{
        fontSize: 1,
        lineHeight: '1.5',
        padding: '0.375rem var(--base-size-8)',
        alignSelf: 'center',
        gridArea: 'message',
      }}
    >
      Success
    </Box>
  </Flash>
)

export const Danger = () => (
  <Flash
    variant="danger"
    sx={{
      display: 'grid',
      gridTemplateColumns: 'min-content 1fr minmax(0, auto)',
      gridTemplateAreas: `'visual message actions'`,
    }}
  >
    <Box sx={{display: 'grid', paddingBlock: 'var(--base-size-8)', alignSelf: 'start', gridArea: 'visual'}}>
      <Octicon icon={InfoIcon} aria-label="Danger" />
    </Box>
    <Box
      sx={{
        fontSize: 1,
        lineHeight: '1.5',
        padding: '0.375rem var(--base-size-8)',
        alignSelf: 'center',
        gridArea: 'message',
      }}
    >
      Danger
    </Box>
  </Flash>
)

export const Warning = () => (
  <Flash
    variant="warning"
    sx={{
      display: 'grid',
      gridTemplateColumns: 'min-content 1fr minmax(0, auto)',
      gridTemplateAreas: `'visual message actions'`,
    }}
  >
    <Box sx={{display: 'grid', paddingBlock: 'var(--base-size-8)', alignSelf: 'start', gridArea: 'visual'}}>
      <Octicon icon={AlertIcon} aria-label="Warning" />
    </Box>
    <Box
      sx={{
        fontSize: 1,
        lineHeight: '1.5',
        padding: '0.375rem var(--base-size-8)',
        alignSelf: 'center',
        gridArea: 'message',
      }}
    >
      Warning
    </Box>
  </Flash>
)

export const Full = () => (
  <Flash
    full
    sx={{
      display: 'grid',
      gridTemplateColumns: 'min-content 1fr minmax(0, auto)',
      gridTemplateAreas: `'visual message actions'`,
    }}
  >
    <Box sx={{display: 'grid', paddingBlock: 'var(--base-size-8)', alignSelf: 'start', gridArea: 'visual'}}>
      <Octicon icon={InfoIcon} aria-label="Info" />
    </Box>
    <Box
      sx={{
        fontSize: 1,
        lineHeight: '1.5',
        padding: '0.375rem var(--base-size-8)',
        alignSelf: 'center',
        gridArea: 'message',
      }}
    >
      Full
    </Box>
  </Flash>
)

export const WithIconAndAction = () => (
  <Flash
    sx={{
      display: 'grid',
      gridTemplateColumns: 'min-content 1fr minmax(0, auto)',
      gridTemplateRows: 'min-content',
      gridTemplateAreas: `'visual message actions'`,
      '@media screen and (max-width: 543.98px)': {
        gridTemplateColumns: 'min-content 1fr',
        gridTemplateRows: 'min-content min-content',
        gridTemplateAreas: `
        'visual message'
        '.      actions'
      `,
      },
    }}
  >
    <Box sx={{display: 'grid', paddingBlock: 'var(--base-size-8)', alignSelf: 'start', gridArea: 'visual'}}>
      <Octicon icon={InfoIcon} aria-label="Info" />
    </Box>
    <Box
      sx={{
        fontSize: 1,
        lineHeight: '1.5',
        padding: '0.375rem var(--base-size-8)',
        alignSelf: 'center',
        gridArea: 'message',
      }}
    >
      This is a flash message with an icon and an action.
      <Link href="/"> Learn more.</Link>
    </Box>
    <Box
      sx={{
        gridArea: 'actions',
        '@media screen and (max-width: 543.98px)': {
          alignSelf: 'start',
          margin: 'var(--base-size-8) 0 0 var(--base-size-8)',
        },
      }}
    >
      <Button>Join waitlist</Button>
    </Box>
  </Flash>
)

export const WithIconActionDismiss = () => (
  <Flash
    sx={{
      display: 'grid',
      gridTemplateColumns: 'min-content 1fr minmax(0, auto)',
      gridTemplateRows: 'min-content',
      gridTemplateAreas: `'visual message actions close'`,
      '@media screen and (max-width: 543.98px)': {
        gridTemplateColumns: 'min-content 1fr',
        gridTemplateRows: 'min-content min-content',
        gridTemplateAreas: `
        'visual message close'
        '.      actions actions'
      `,
      },
    }}
  >
    <Box sx={{display: 'grid', paddingBlock: 'var(--base-size-8)', alignSelf: 'start', gridArea: 'visual'}}>
      <Octicon icon={InfoIcon} aria-label="Info" />
    </Box>
    <Box
      sx={{
        fontSize: 1,
        lineHeight: '1.5',
        padding: '0.375rem var(--base-size-8)',
        alignSelf: 'center',
        gridArea: 'message',
      }}
    >
      This is a flash message with an icon and an action.
      <Link href="/"> Learn more.</Link>
    </Box>
    <Box
      sx={{
        gridArea: 'actions',
        '@media screen and (max-width: 543.98px)': {
          alignSelf: 'start',
          margin: 'var(--base-size-8) 0 0 var(--base-size-8)',
        },
      }}
    >
      <Button>Join waitlist</Button>
    </Box>
    <Box
      sx={{
        gridArea: 'close',
        marginLeft: 'var(--controlStack-medium-gap-condensed)',
      }}
    >
      <IconButton variant="invisible" icon={XIcon} aria-label="Dismiss" sx={{svg: {margin: '0', color: 'fg.muted'}}} />
    </Box>
  </Flash>
)
