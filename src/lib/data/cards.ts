import type { Card } from "../../types";




export function createDefaultDeck() {
	const cards: Array<Card> = [];

	for (let i = 2; i <= 10; i++) {
		const card: Card = {
			id: crypto.randomUUID(),
			name: "Gold",
			trait: "Gold",
			targets: ["Hand", "Bag"],
			value: i
		};

		cards.push(card);
	}

	for (let i = 2; i <= 10; i++) {
		const monsterValue = i;

		for (let j = 0; j < (i == 10 ? 3 : 2); j++) {
			const card: Card = {
				id: crypto.randomUUID(),
				name: getMonsterName(monsterValue),
				trait: "Monster",
				targets: ["Player", "Shield"],
				value: monsterValue
			};

			cards.push(card);
		}
	}

	for (let i = 2; i <= 10; i++) {
		const card: Card = {
			id: crypto.randomUUID(),
			name: "Potion",
			trait: "Potion",
			targets: ["Hand"],
			value: i
		};

		cards.push(card);
	}

	for (let i = 2; i <= 7; i++) {
		const card: Card = {
			id: crypto.randomUUID(),
			name: "Shield",
			trait: "Shield",
			targets: [],
			value: i
		};

		cards.push(card);
	}

	for (let i = 2; i <= 7; i++) {
		const card: Card = {
			id: crypto.randomUUID(),
			name: "Spell",
			trait: "Spell",
			targets: ["Monster"],
			value: i
		};

		cards.push(card);
	}

	cards.push({
		id: crypto.randomUUID(),
		name: "Lifebrew",
		trait: "Magic",
		targets: ["Potion"],
		value: 0,
	});

	cards.push({
		id: crypto.randomUUID(),
		name: "Resurrect",
		trait: "Magic",
		targets: ["Player"],
		value: 0,
	});

	cards.push({
		id: crypto.randomUUID(),
		name: "Ultimate",
		trait: "Magic",
		targets: ["Monster"],
		value: 0,
	});

	cards.push({
		id: crypto.randomUUID(),
		name: "Gravebount",
		trait: "Magic",
		targets: ["Player"],
		value: 0,
	});

	cards.push({
		id: crypto.randomUUID(),
		name: "Ricochet",
		trait: "Magic",
		targets: ["Player"],
		value: 0,
	});

	return cards;
}

function getMonsterName(value: number): string {
	switch (value) {
		case 2: return "Slime";
		case 3: return "Skeleton";
		case 4: return "Zombie";
		case 5: return "Gorgon";
		case 6: return "Centaur";
		case 7: return "Minotaur";
		case 9: return "Valkyrie";
		case 10: return "Dragon";
	}

	return "";
}

/**
 * record berdasarkan game
 
	// gold (2)
	// gold (3)
	// gold (4)
	// gold (5)
	// gold (6)
	// gold (7)
	// gold (8)
	// gold (9)
	// gold (10)

	// monster (2)
	// monster (2)
	// monster (3)
	// monster (3)
	// monster (4)
	// monster (4)
	// monster (5)
	// monster (5)
	// monster (6)
	// monster (6)
	// monster (7)
	// monster (7)
	// monster (8)
	// monster (8)
	// monster (9)
	// monster (9)
	// monster (10)
	// monster (10)
	// monster (10)

	// lifebrew
	// resurrect
	// ultimate
	// gravebount
	// ricochet

	// potion (2)
	// potion (3)
	// potion (4)
	// potion (5)
	// potion (6)
	// potion (7)
	// potion (8)
	// potion (9)
	// potion (10)

	// shield (2)
	// shield (3)
	// shield (4)
	// shield (5)
	// shield (6)
	// shield (7)


	// spell (2)
	// spell (3)
	// spell (4)
	// spell (5)
	// spell (6)
	// spell (7)
 * 
 */