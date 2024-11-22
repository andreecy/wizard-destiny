

export type CardTrait = "Spell" | "Shield" | "Potion" | "Gold" | "Monster";

export type Card = {
	id: string;
	name: string;
	trait: CardTrait;
	value: number;

	// assets file name/url?
};