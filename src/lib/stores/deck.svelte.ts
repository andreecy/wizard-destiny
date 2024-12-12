import type { Card } from '../../types';
import { Utility } from '$lib/utility';
import { createDefaultDeck } from '$lib/data/cards';
import { getContext, setContext } from 'svelte';

const DECK_KEY = Symbol('DECK');

class Deck {
	private cards = $state<Array<Card>>([]);

	constructor() {
		this.cards = this.generateDeck();
	}

	generateDeck() {
		const cards = createDefaultDeck();
		return cards;
	}

	shuffle() {
		this.cards = this.cards.sort(() => Math.random() - 0.5);
	}

	drawCards(amount: number) {
		const cardDraws = [];

		for (let i = 0; i < amount; i++) {
			cardDraws.push(this.cards.pop());
		}

		return cardDraws;
	}

	reset() {
		this.cards = this.generateDeck();
	}
}


export function setDeckState() {
	return setContext(DECK_KEY, new Deck());
}

export function getDeckState() {
	return getContext<ReturnType<typeof setDeckState>>(DECK_KEY);
}