import { signIn } from 'next-auth/react';

import Facebook from '../../atoms/icons/Facebook';
import Github from '../../atoms/icons/Github';
import Google from '../../atoms/icons/Google';
import { SocialButton } from '../../atoms/button';
import { H2, Separation } from '../../atoms/text';

export default function LoginHeader() {
  return (
    <>
      <H2 className='text-four text-center' label='Sign In with ' />

      <div className='flex gap-4 justify-center'>
        <SocialButton onClick={() => signIn('github')}>
          <Github />
        </SocialButton>
        <SocialButton>
          <Facebook />
        </SocialButton>
        <SocialButton onClick={() => signIn('google')}>
          <Google />
        </SocialButton>
      </div>

      <Separation label='OR' />
    </>
  );
}
