export const monthCode = (month: number) => {
	const monthCodes = ["", "янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сент", "окт", "ноя", "дек"];
	return monthCodes[month] || "";
}
