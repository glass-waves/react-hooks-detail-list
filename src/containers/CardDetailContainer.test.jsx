import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CardDetailContainer from './CardDetailContainer';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import data from '../services/data.json';
import { MemoryRouter } from 'react-router';

const server = setupServer(
    rest.get('https://api.magicthegathering.io/v1/cards/555665556', (req, res, ctx) => {
        return res(ctx.json({ card: {
            "name": "Ancestor's Chosen",
            "manaCost": "{5}{W}{W}",
            "cmc": 7.0,
            "colors": ["White"],
            "colorIdentity": ["W"],
            "type": "Creature — Human Cleric",
            "types": ["Creature"],
            "subtypes": ["Human", "Cleric"],
            "rarity": "Uncommon",
            "set": "10E",
            "setName": "Tenth Edition",
            "text": "First strike (This creature deals combat damage before creatures without first strike.)\nWhen Ancestor's Chosen enters the battlefield, you gain 1 life for each card in your graveyard.",
            "artist": "Pete Venters",
            "number": "1",
            "power": "4",
            "toughness": "4",
            "layout": "normal",
            "multiverseid": "130550",
            "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=130550&type=card",
            "variations": ["b7c19924-b4bf-56fc-aa73-f586e940bd42"],
            "foreignNames": [
                {
                    "name": "Ausgewählter der Ahnfrau",
                    "text": "Erstschlag (Diese Kreatur fügt Kampfschaden vor Kreaturen ohne Erstschlag zu.)\nWenn der Ausgewählte der Ahnfrau ins Spiel kommt, erhältst du 1 Lebenspunkt für jede Karte in deinem Friedhof dazu.",
                    "type": "Kreatur — Mensch, Kleriker",
                    "flavor": "„Es ist der Wille aller, und meine Hand, die ihn ausführt.\"",
                    "imageUrl": "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=148411&type=card",
                    "language": "German",
                    "multiverseid": 148411
                }]}}
                ))
    })
);


describe('CardDetailContainer', () => {
    beforeAll(() => server.listen());
    afterAll(() => server.close());

    it('renders a list of magic cards to the page', async () => {
        render(<MemoryRouter><CardDetailContainer match={{
            params: {
                id: '555665556'
            }}}
        /></MemoryRouter>);
        screen.getByText('Loading');
        const ul = await screen.findByText("Ancestor's Chosen");
        expect(ul).toMatchSnapshot();
    });
});