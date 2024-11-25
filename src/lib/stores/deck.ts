// src/lib/stores/deck.js
import { writable } from 'svelte/store';
import type { Card } from '../../types';
import { Utility } from '$lib/utility';
import { createDefaultDeck } from '$lib/data/cards';


class Deck {
	private cards: Array<Card>;


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

	drawCard() {
		return this.cards.pop();
	}

	reset() {
		this.cards = this.generateDeck();
	}
}

export const deck = writable(new Deck());
