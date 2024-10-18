export interface IComment {
	id: number;
	body: string;
	postId: number;
	likes: number;
	user: ObjectUser;
}
interface ObjectUser {
	id: number;
	username: string;
	fullName: string;
}