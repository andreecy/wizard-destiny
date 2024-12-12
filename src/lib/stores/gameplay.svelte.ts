import { getContext, setContext } from "svelte";
import type { Card } from "../../types";
import { getDeckState } from "./deck.svelte";
import { gameConfigs } from "$lib/game-config";

const GAMEPLAY_KEY = Symbol('GAMEPLAY');

export class Gameplay {
	deckStore = getDeckState();
	gameState = $state<"preparation" | "started" | "finished">("preparation");
	field = $state<Array<Card>>([]);
	bag = $state<Array<Card>>([]);
	hand = $state<Array<Card>>([]);


	startGameplay() {
		if (this.gameState != "preparation") { return; }

		this.gameState = "started";
		console.log("gameplay start!");
		this.deckStore.shuffle();

		this.checkRefillFields();
	}

	setGameOver() {
		if (this.gameState != "started") { return; }

		this.gameState = "finished";
	}

	setWin() {
		if (this.gameState != "started") { return; }

		this.gameState = "finished";
	}

	private drawCards() {
		const amount = gameConfigs.FIELD_COUNT - this.field.length;
		const cards = this.deckStore.drawCards(amount);

		for (const card of cards) {
			if (card == undefined) { continue; }
			this.field.push(card);
		}

		console.log(`gameplay draw ${amount} cards : `, cards);
	}

	checkRefillFields() {
		if (this.field.length <= 1) {
			this.drawCards();
		}
	}

	equipCardToHand(card: Card) {
		if (this.hand.length >= 2) { return false; }

		// remove card-data dari field, kemudian add ke hand
		this.field = this.field.filter(e => e != card);
		this.hand.push(card);
		return true;
	}

	equipCardToBag(card: Card) {
		if (this.bag.length != 0) { return false; }

		// remove card-data dari field, kemudian add ke bag
		this.field = this.field.filter(e => e != card);
		this.bag.push(card);
		return true;
	}
}

export function setGameplayState() {
	return setContext(GAMEPLAY_KEY, new Gameplay());
}

export function getGameplayState() {
	return getContext<ReturnType<typeof setGameplayState>>(GAMEPLAY_KEY);
}