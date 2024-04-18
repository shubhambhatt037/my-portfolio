import ContactForm from './ContactForm';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #121121; /* Set background color */
  height: 80vh; /* Set height to 80% of the viewport height */
  display: flex;
  flex-direction: column; /* Adjust to column layout */
  align-items: center;
  justify-content: center;
  padding: 3rem; /* Adjust padding as needed */
`;

const Heading = styled.h1`
  font-size: 2rem; /* Set font size for the heading */
  color: #f0e68c; /* Set text color for the heading */
  margin-bottom: 2rem; /* Add margin bottom for spacing */
`;

const WhiteText = styled.span`
  color: white; /* Set text color to white */
`;

const FormContainer = styled.div`
  background-color: white; /* Set background color for the box */
  padding: 2rem; /* Adjust padding as needed */
  border-radius: 8px; /* Add border radius for the box */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Add shadow for the box */
  max-width: 400px; /* Set max-width for the box */
  width: 100%; /* Make the box responsive */
`;

const Contact: React.FC = () => (
  <Container id="contact">
    <Heading>
      <span className="text-yellow-400">CONTACT</span> <WhiteText>ME</WhiteText>
    </Heading>
    <FormContainer>
      <ContactForm />
    </FormContainer>
  </Container>
);

export default Contact;
