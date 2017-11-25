var App = React.createClass({

    render: function() {
        return(
            React.createElement('div', {className: 'app'}, 
// keyword class jest zarezerwowane w ES6, dlatego React ma keyword 'className' kt
                React.createElement(ContactForm, {contact: contactForm}),
                React.createElement(Contacts, {items: contacts}, {})
            )
        );
    }
});


var contacts = [
    {
      id: 1,
      firstName: 'Jan',
      lastName: 'Nowak',
      email: 'jan.nowak@example.com',
    },
    {
      id: 2,
      firstName: 'Adam',
      lastName: 'Kowalski',
      email: 'adam.kowalski@example.com',
    },
    {
      id: 3,
      firstName: 'Zbigniew',
      lastName: 'Koziol',
      email: 'zbigniew.koziol@example.com',
    },
    {
      id: 4,
      firstName: 'Jan',
      lastName: 'Nowak',
      email: 'jan.nowak@example.com',
    },
    {
      id: 5,
      firstName: 'Adam',
      lastName: 'Kowalski',
      email: 'adam.kowalski@example.com',
    },
    {
      id: 6,
      firstName: 'Zbigniew',
      lastName: 'Koziol',
      email: 'zbigniew.koziol@example.com',
    }
  ];
  

  
  var contactForm = {
    firstName: '',
    lastName: '',
    email: ''
  };
  