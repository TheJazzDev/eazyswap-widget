import { Link } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from '@nextui-org/react';
import AnimatedLogo from '../../utils/AnimatedLogo';

const Layout = () => {
  const { user, logout } = useAuthContext();

  return (
    <nav className='fixed w-full top-0 z-10 bg-[#111827]/70 backdrop-blur-xl flex justify-between items-center text-white py-3 px-4 md:px-8 border-b border-gray-700'>
      <Link to='/'>
        <AnimatedLogo className='w-40' />
      </Link>
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
            <DropdownItem
              key='profile'
              className='h-14 gap-2'
              textValue='Signed in'>
              <p className='font-semibold'>Signed in as</p>
              <p className='font-semibold'>{user.email}</p>
            </DropdownItem>
            <DropdownItem>
              <p className='font-semibold font-moranga italic'>
                {user.displayName}
              </p>
            </DropdownItem>
            <DropdownItem
              onClick={logout}
              key='logout'
              color='danger'
              textValue='Log Out'>
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
            <DropdownItem textValue='Not Signed in'>
              <p className='font-semibold'>Not Signed in</p>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      )}
    </nav>
  );
};

export default Layout;
