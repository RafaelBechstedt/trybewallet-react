import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('Testes Wallet', () => {
  test('Testa se preenchido o formulario, o header é atualizado', async () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });
    const despesa = screen.getByText(/despesas:/i);
    const descricao = screen.getByRole('textbox', { name: /descrição:/i });
    const botao = screen.getByRole('button', { name: /adicionar despesa/i });
    userEvent.type(despesa, '0');
    userEvent.type(descricao, 'Teste');
    userEvent.click(botao);
    const valorTotal = await screen.findByText('0.00');
    expect(valorTotal).toBeInTheDocument();
  });
});
