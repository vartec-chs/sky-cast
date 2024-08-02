export function getWindDirection(degrees: number): string {
	if (degrees < 0 || degrees > 360) {
			throw new Error("Degrees must be between 0 and 360");
	}

	const directions = ["С", "СВ", "В", "ЮВ", "Ю", "ЮЗ", "З", "СЗ"];
	const index = Math.floor((degrees + 22.5) / 45) % 8;
	return directions[index];
}

