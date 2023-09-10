export const login = (): { type: string } => ({
    type: 'LOGIN',
});

export const logout = (): { type: string } => ({
    type: 'LOGOUT',
});