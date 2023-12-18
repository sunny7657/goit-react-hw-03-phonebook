import { Component } from 'react';
import styled from 'styled-components';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const BtnStyled = styled.button`
  display: block;
  margin-top: 20px;
  font-size: 12px;
  padding: 8px;
`;

export class FormAddContact extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
    Notify.success('The contact was created');
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            required
            placeholder="Adam Smith"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            required
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
            placeholder="000-00-00"
            value={this.state.number}
            onChange={this.handleInputChange}
          />
        </label>
        <BtnStyled type="submit">Add contact</BtnStyled>
      </form>
    );
  }
}
