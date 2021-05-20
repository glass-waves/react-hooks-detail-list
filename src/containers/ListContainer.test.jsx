import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ListContainer from './ListContainer';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import data from '../services/data.json';
import { MemoryRouter } from 'react-router';

const server = setupServer(
    rest.get('https://api.magicthegathering.io/v1/cards', (req, res, ctx) => {
        return res(ctx.json(data))
    })
);


describe('ListContainer', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());

    it('renders a list of magic cards to the page', async () => {
        render(<MemoryRouter><ListContainer /></MemoryRouter>);
        screen.getByText('Loading');
        const ul = await screen.findByRole('list', { name: 'cards' });
        expect(ul).toMatchSnapshot();
    });
});
