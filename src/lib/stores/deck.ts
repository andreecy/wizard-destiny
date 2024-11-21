// src/lib/stores/deck.js
import { writable } from 'svelte/store';
import type { Card } from '../../types';
import { Utility } from '$lib/utility';


class Deck {
	private cards: Array<Card>;


	constructor() {
		this.cards = this.generateDeck();
	}

	generateDeck() {
		// todo: ambil cards dari resources

		const monsters: Array<Card> = [];
		for (let i = 0; i < 3; i++) {
			monsters.push({
				id: crypto.randomUUID(),
				name: "Dragon",
				trait: "Monster",
				value: Utility.randomIntInclusive(3, 6)
			});
		}

		const potions: Array<Card> = [];
		for (let i = 0; i < 3; i++) {
			potions.push({
				id: crypto.randomUUID(),
				name: "Potion",
				trait: "Potion",
				value: Utility.randomIntInclusive(3, 10)
			});
		}

		const shields: Array<Card> = [];
		for (let i = 0; i < 2; i++) {
			shields.push({
				id: crypto.randomUUID(),
				name: "Shield",
				trait: "Shield",
				value: Utility.randomIntInclusive(3, 8)
			});
		}

		const spells: Array<Card> = [];
		for (let i = 0; i < 6; i++) {
			spells.push({
				id: crypto.randomUUID(),
				name: "Spell",
				trait: "Spell",
				value: Utility.randomIntInclusive(3, 10)
			});
		}

		const golds: Array<Card> = [];
		for (let i = 0; i < 5; i++) {
			golds.push({
				id: crypto.randomUUID(),
				name: "Gold",
				trait: "Gold",
				value: Utility.randomIntInclusive(2, 10)
			});
		}


		return [...monsters, ...potions, ...shields, ...spells, ...golds];
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
