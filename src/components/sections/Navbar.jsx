import { useLocation, useNavigate } from 'react-router'
import { Box, Button, InlineStack } from '@shopify/polaris'
import analyzify_logo from '../../assets/analyzify_color.svg'

export const Navbar = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Report', path: '/report' },
  ]

  return (
    <Box background="bg-fill" paddingInline="400" paddingBlock="200" shadow="sm" position="sticky" zIndex="10">
      <InlineStack align="space-between" wrap={ false } blockAlign="center">
        <img src={ analyzify_logo } style={ { height: '55px' } } alt="logo"/>
        <InlineStack gap="400" wrap={ false }>
          { navItems.map(({ label, path }) => (
            <Button
              key={ path }
              variant={ pathname === path ? 'primary' : 'tertiary' }
              onClick={ () => navigate(path) } ö
            >
              { label }
            </Button>
          )) }
        </InlineStack>
      </InlineStack>
    </Box>
  )
}
