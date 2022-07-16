import { Form } from './Form/Form';
import Title from './Title/Title';
import style from './App.module.css';
import ContactList from './contactList/ContactList';
import NotContacts from './NotContacts/NotContacts';
import { useGetAllContactsQuery } from '../server/fetchContacts';

const App = () => {
  const { data: listContacts, error, isLoading } = useGetAllContactsQuery();
  return (
    <div className={style.conteiner}>
      <Title text={'Phonebook'} />
      <Form />

      <Title text={'Contacts'} />
      {error ? (
        <NotContacts text={`Data contacts ${error.data}`} />
      ) : isLoading ? (
        <NotContacts text={'Wite loading now...'} />
      ) : (
        <ContactList contacts={listContacts} />
      )}
    </div>
  );
};
export default App;
