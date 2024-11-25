

export type CardTrait = "Spell" | "Shield" | "Potion" | "Gold" | "Monster" | "Magic";
export type Target = CardTrait | "Player" | "Hand" | "Bag";

export type Card = {
	id: string;
	name: string;
	trait: CardTrait;
	value: number;
	targets: Array<Target>;
	// assets file name/url?
};