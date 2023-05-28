export type Form = {
    email: string;
    displayName?: string;
    password: string;
};

export type Problem = {
	id: string;
	title: string;
	difficulty: string;
	category: string;
	order: number;
	videoId?: string;
};