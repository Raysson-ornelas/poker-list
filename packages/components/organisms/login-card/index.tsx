import { Container } from '../../atoms/container';
import { Card } from '../../molecules/card';
import LoginBody from '../../molecules/login-body';
import LoginHeader from '../../molecules/login-header';

export function LoginCard() {
  return (
    <Container>
      <Card>
        <LoginHeader />
        <LoginBody />
      </Card>
    </Container>
  );
}
