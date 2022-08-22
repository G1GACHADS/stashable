const FooterContainer = styled.View`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
`

const FooterText = styled.Text`
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.grey5};
  font-family: ${({ theme }) => theme.typography.family.medium};
  font-size: ${({ theme }) => theme.typography.tall.md};
`

const FooterLink = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.typography.family.semiBold};
  font-size: ${({ theme }) => theme.typography.tall.md};
`

export function Footer({ navigation }) {
  return (
    <FooterContainer>
      <FooterText>Don't have an account yet?</FooterText>
      <TouchableOpacity
        onPress={() => navigation.navigate(routes.registerRoute)}
      >
        <FooterLink>Register Now</FooterLink>
      </TouchableOpacity>
    </FooterContainer>
  )
}

export default Footer
