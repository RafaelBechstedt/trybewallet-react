import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('Testes Login', () => {
  test('Testa se existe campo de login', () => {
    renderWithRouterAndRedux(<App />);
    const email = screen.getByRole('textbox');
    expect(email).toBeInTheDocument();
  });
  test('Testa se existe campo de senha', () => {
    renderWithRouterAndRedux(<App />);
    const senha = screen.getByPlaceholderText(/senha/i);
    expect(senha).toBeInTheDocument();
  });
  test('Testa se existe um botão de login', () => {
    renderWithRouterAndRedux(<App />);
    const botao = screen.getByRole('button', { name: /entrar/i });
    expect(botao).toBeInTheDocument();
  });
  test('Testa se ao preencher corretamente os campos e clicar no botão', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const botao = screen.getByRole('button', { name: /entrar/i });
    const senha = screen.getByPlaceholderText(/senha/i);
    const email = screen.getByRole('textbox');
    userEvent.type(email, 'bechstedt@hotmail.com');
    userEvent.type(senha, '123456');
    userEvent.click(botao);
    expect(history.location.pathname).toBe('/carteira');
  });
});
