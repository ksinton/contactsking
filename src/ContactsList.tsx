import React, {useState} from 'react';
import './ContactsList.css';

function ContactsList() {

    interface Contact {
        id: number;
        firstName: string;
        lastName: string;
        phone: string;
        email: string;
        communications: string[];
    }

    const contactsData: Contact[] = [
        {
            id: 783491, // Unique ID
            firstName: 'Kim',
            lastName: 'Sinton',
            phone: '408-824-8917',
            email: 'kimsinton@gmail.com',
            communications: [
                'sfsjklf sklfjsklfjslk jkwdkjw kjfhwjkhfwjkh'
            ],
        },
        {
            id: 219384, // Unique ID
            firstName: 'Alex',
            lastName: 'Johnson',
            phone: '415-555-1234',
            email: 'alexjohnson@example.com',
            communications: [
                'Hello, how can I help you today?'
            ],
        },
        {
            id: 583720, // Unique ID
            firstName: 'Jordan',
            lastName: 'Lee',
            phone: '650-555-5678',
            email: 'jordanlee@example.com',
            communications: [
                'Looking forward to our meeting next week.'
            ],
        },
        {
            id: 947102, // Unique ID
            firstName: 'Taylor',
            lastName: 'Smith',
            phone: '408-555-8765',
            email: 'taysmith@example.com',
            communications: [
                'Can you send me the report by Friday?'
            ],
        },
        {
            id: 302874, // Unique ID
            firstName: 'Morgan',
            lastName: 'Brown',
            phone: '408-555-4321',
            email: 'morganbrown@example.com',
            communications: [
                'Just checking in on our project status.'
            ],
        },
        {
            id: 864215, // Unique ID
            firstName: 'Riley',
            lastName: 'Davis',
            phone: '650-555-9876',
            email: 'rileydavis@example.com',
            communications: [
                'I appreciate your prompt response.'
            ],
        },
    ];

    const [contacts, setContacts] = useState(contactsData);
    const [selectedContact, setSelectedContact] = useState(contactsData[contactsData.length - 1]);

    const List: React.FC = () => {
        return <div className="list">
            {
                contacts.map((contact, index) => <div className="item" key={index}>{contact.firstName}  {contact.lastName}</div>)
            }
        </div>
    }

    const Detail: React.FC = () => {
        return  <div className="detail">
            <h2>{ selectedContact.firstName } { selectedContact.lastName }</h2>
            <div className="table">
                <span>Phone:</span>
                <span>{selectedContact.phone}</span>
                <span>Email:</span>
                <span>{selectedContact.email}</span>
            </div>
        </div>
    }

    const selectContact = () => {
        //setSelectedContact();
    };

    return <div className="contacts-list">
        <List/>
        <Detail/>
    </div>;
}

export default ContactsList;