import { CookieService } from '@libs/cookie-service';
import { Box, Text } from '@libs/design';
import { ACTION, FEATURE, usePermissionsServiceContext } from '@libs/permissions-service-provider';
import { useNavigate, Outlet } from '@libs/router';
import { StorageService } from '@libs/storage-service';

export const Home = () => {
  const navigate = useNavigate();
  const { hasPermission } = usePermissionsServiceContext();
  StorageService.set<string>('theme', 'dark');
  const themeValue: string | null = StorageService.get('theme');
  return (
    <Box bg="brand.100" w="">
      {hasPermission(`${FEATURE.DASHBOARD}.${ACTION.READ}`) && <Text>Loading... {themeValue}</Text>}
      <Text>Home Page</Text>
      <button onClick={() => navigate('example')}>Click me</button>
      <button onClick={CookieService.openWidget}>Cookie</button>
      <Outlet />
    </Box>
  );
};
