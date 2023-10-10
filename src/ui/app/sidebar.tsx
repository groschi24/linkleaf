'use client';

import { useState } from 'react';
import {
  Center,
  Tooltip,
  UnstyledButton,
  Stack,
  rem,
  AppShell,
} from '@mantine/core';
import {
  IconDeviceDesktopAnalytics,
  IconSettings,
  IconLogout,
  IconBrandGithub,
  IconPencil,
} from '@tabler/icons-react';
import classes from '@/styles/AppSidebar.module.css';

interface NavbarLinkProps {
  icon: typeof IconSettings;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  return (
    <Tooltip label={label} position='right' transitionProps={{ duration: 0 }}>
      <UnstyledButton
        onClick={onClick}
        className={classes.link}
        data-active={active || undefined}
      >
        <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconPencil, label: 'Designer' },
  { icon: IconDeviceDesktopAnalytics, label: 'Analytics' },
  // { icon: IconSettings, label: 'Settings' },
];

export default function AppSidebar() {
  const [active, setActive] = useState(0);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <AppShell.Navbar p='md'>
      <Center>
        <IconBrandGithub type='mark' size={30} />
      </Center>

      <div className={classes.navbarMain}>
        <Stack justify='center' gap={0}>
          {links}
        </Stack>
      </div>

      <Stack justify='center' gap={0}>
        <NavbarLink icon={IconSettings} label='Settings' />
        <NavbarLink icon={IconLogout} label='Logout' />
      </Stack>
    </AppShell.Navbar>
  );
}
