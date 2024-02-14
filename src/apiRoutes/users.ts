const endpoint = `${process.env.API_URL}/public/v2`;

export const usersApiRoute = () => `${endpoint}/users`;

export const userListApiRoute = (page: number) => `${usersApiRoute()}?page=${page}`;

export const userApiRoute = (id: string) => `${usersApiRoute()}/${id}`;

export const userPostListApiRoute = (id: string) => `${userApiRoute(id)}/posts`;
