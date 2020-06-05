export interface Menu {
	id: string,
	title: string,
	description: string,
	image: string,
	menus: MenuList[];
}

declare interface MenuList {
	menuid: string,
	name: string,
	description: string,
	price: string,
	imgUrl: string,
}