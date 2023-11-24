import { useAuthContext } from '../../context/AuthContext';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from '@nextui-org/react';
import Logo from '../../assets/logo.png';

const Layout = ({ children }) => {
  const { user, logout } = useAuthContext();

  return (
    <main className='pb-8'>
      <nav className='sticky top-0 z-10 bg-[#111827]/70 backdrop-blur-xl flex justify-between items-center text-white py-3 px-4 md:px-8 border-b border-gray-700'>
        <a href='/'>
          <img src={Logo} alt='Logo' />
        </a>
        {user ? (
          <Dropdown placement='bottom-end'>
            <DropdownTrigger>
              <Avatar
                src={user.photoURL}
                as='button'
                className='transition-transform '
              />
            </DropdownTrigger>
            <DropdownMenu aria-label='Profile Actions' variant='flat'>
              <DropdownItem key='profile' className='h-14 gap-2'>
                <p className='font-semibold'>Signed in as</p>
                <p className='font-semibold'>{user.email}</p>
              </DropdownItem>
              <DropdownItem>
                <p className='font-semibold font-moranga italic'>
                  {user.displayName}
                </p>
              </DropdownItem>
              <DropdownItem onClick={logout} key='logout' color='danger'>
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <Dropdown placement='bottom-end'>
            <DropdownTrigger>
              <Avatar
                src='https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0='
                as='button'
                className='transition-transform border-none'
              />
            </DropdownTrigger>
            <DropdownMenu aria-label='Profile Actions' variant='flat'>
              <DropdownItem className=''>
                <p className='font-semibold'>Not Signed in</p>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        )}
      </nav>
      <section className='px-4 md:px-6'>{children}</section>
    </main>
  );
};

export default Layout;
