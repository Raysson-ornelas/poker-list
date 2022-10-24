import { Button } from '../../atoms/button';
import { Input } from '../../atoms/input';
import { H2 } from '../../atoms/text';

export default function LoginBody() {
  return (
    <>
      <H2 className='text-four text-center' label='Sign Up and join us' />

      <div className='flex flex-col gap-y-1'>
        <Input type='text' label='Full Name' placeholder='dan delion' />
        <Input type='Email' label='Email' placeholder='janotlapin@xyz.com' />

        <Input type='password' label='password' placeholder='' />
        <Button label='Create Account' />
      </div>
    </>
  );
}
